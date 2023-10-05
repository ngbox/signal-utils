---
sidebar_position: 20
sidebar_label: Creating Custom Operator
---

# Creating Custom Operator

Create a TypeScript function that returns your custom operator. The function can accept one or more parameters and return a SignalOperatorFunction as output.

<br/><br/>

```ts
type SignalOperatorFunction<InputSignalType, OutputSignalType> = (
  source: Signal<InputSignalType>
) => Signal<OutputSignalType>;
```

:::success
The function returns **SignalOperatorFunction** runs in the injection context.
:::

## Example

### map to currency

```ts
export function mapCurrency(): SignalOperatorFunction<number, string> {
  const currencyService = inject(CurrencyService); // safe to make injections.

  return (source: Signal<T>): Signal<K> => {
    const mapped: WritableSignal<K> = signal(currencyService.mapFrom(source()));

    effect(
      () => {
        const sourceValue = source();
        mapped.set(currencyService.mapFrom(sourceValue));
      },
      { allowSignalWrites: true }
    );

    return mapped.asReadonly();
  };
}
```

### Only Fibonacci Numbers

```ts
export function filterFibonacciNumbers<T, K>(
  initialValue: T
): SignalOperatorFunction<T, K> {
  return (source: Signal<T>): Signal<K> => {
    const target: WritableSignal<K> = signal(initialValue, options);

    effect(
      () => {
        const sourceValue = source();
        if (isFibonacci(sourceValue)) {
          target.set(sourceValue);
        }
      },
      { ...options, allowSignalWrites: true }
    );

    return target.asReadonly();
  };
}
```

```ts
const source = signal(10);
const lastFibonacci = signalPipe(source, filterFibonacciNumbers(0));
```
