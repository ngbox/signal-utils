---
sidebar_position: 6
---

# throttleTime

<code>throttleTime</code> operator limits the emission of values from the source signal based on a time window. It emits the first value in the window and then ignores subsequent values until the window expires.
<br/><br/>

```ts
throttleTime<T>(throttleDuration: number, options: SignalThrottleTimeOptions<T> = {}): T
```

## Parameters

<table>
  <tbody>
    <tr>
      <td>
        <code>throttleDuration</code>
      </td>
      <td> The duration (in milliseconds) of the time window in which only the values will be emitted</td>
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

### Throttle click emissions

```ts
@Component({
  template: `
    <p>click count: {{ clickCount() }}</p>
    <p>throttled click count: {{ throttledClickCount() }}</p>
  `,
})
export class ThrottleTimeExampleComponent {
  readonly signalPipe = createSignalPipe();

  clickCount = signal(0);
  throttledClickCount: Signal<number> = signalPipe(
    this.clickCount,
    throttleTime(1000)
  ); // to every 1000 milliseconds
}
```
