---
sidebar_position: 6
---

# delay

<code>delay</code> operator introduces a specified delay between the emission of signals from the source. It delays the emission of each value by a defined duration, allowing you to control the timing of when values are processed downstream.
<br/><br/>

```ts
delay<T>(delayDuration: number, options: SignalDelayOptions<T> = {}): T
```

## Parameters

<table>
  <tbody>
    <tr>
      <td>
        <code>delayDuration</code>
      </td>
      <td>The duration (in milliseconds) by which to delay the emissions</td>
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

### Calculate the square of the source

Display the delayed progress after a 2000 millisecond delay.

```ts
@Component()
export class MyComponent {
  readonly signalPipe = createSignalPipe();

  progress = signal(0);
  delayedProgress = signalPipe(source, delay(2000));
}
```
