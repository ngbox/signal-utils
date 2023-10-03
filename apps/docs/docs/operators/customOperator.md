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

**SignalOperatorFunction** always runs in the injection context.
:::

## Example

### map

```ts
export function map<T, K>(
  mapFn: (value: T) => K,
  options: SignalMapOptions<K> = {}
): SignalOperatorFunction<T, K> {
  return (source: Signal<T>): Signal<K> => {
    const mapped: WritableSignal<K> = signal(mapFn(source()), options);

    effect(
      () => {
        const sourceValue = source();
        mapped.set(mapFn(sourceValue));
      },
      { ...options, allowSignalWrites: true }
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
const signalPipe = createSignalPipe();
const source = signal(10);
signalPipe(source, filterFibonacciNumbers(0));
```
