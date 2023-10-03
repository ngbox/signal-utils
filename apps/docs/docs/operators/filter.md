---
sidebar_position: 6
---

# filter

<code>filter</code> operator filters values emitted by the source based on a provided predicate function.
<br/><br/>

```ts
filter<T>(filterFn: (value: T) => boolean, options: SignalFilterOptions<T> = {}): T | undefined
```

## Parameters

<table>
  <tbody>
    <tr>
      <td>
        <code>predicate</code>
      </td>
      <td>A predicate function that determines whether a signal should be emitted <code>true</code> or filtered out <code>false</code>.</td>
    </tr>
    <tr>
      <td> 
        <code>options</code>
      </td>
      <td>
        Optional.
        The combination of
        <a target="_blank" href="https://angular.io/api/core/CreateEffectOptions"> CreateEffectOptions </a> and 
        <a target="_blank" href="https://angular.io/api/core/CreateSignalOptions"> CreateSignalOptions </a>
        (excluding the <code>allowSignalWrites</code> property)
      </td>
    </tr>
  </tbody>
</table>

## Example

### Even Numbers

```ts
@Component({
  template: `
    <p>Interval: {{ intervalRef.interval() }} </p>
    <p>Is even: {{ isEven() }} </p>
  `
})
export class IntervalComponent {
  intervalRef = createInterval(0, 1000);
  private isEven = this.signalPipe(this.intervalRef.interval(), filter((count) => count % 2 === 0);
}

```

### Callback runs in the Injection Context

:::success

**predicate** function always runs in the injection context.
:::

```ts
@Component({
  template: `
    <p>Source: {{ source() }}</p>
    <p>Last fibonacci number: {{ onlyFibonacciNumbers() }}</p>
  `
})
export class MyComponent {
  readonly intervalRef = createInterval(0, 2500);

  this.onlyFibonacciNumbers = this.signalPipe(
                this.intervalRef.interval(),
                filter(val) => inject(FibonacciService).isFibonacci(val)
              );
}
```
