---
sidebar_position: 6
---

# bufferCount

<code>bufferCount</code> operator collects a specified number of consecutive values from the source signal and emits them as an array. This can be particularly useful when you want to group signal emits into fixed-size arrays for processing or presentation.
<br/><br/>

```ts
bufferCount<T>(bufferSize: number, options: SignalBufferCountOptions<T> = {}): T[]
```

## Parameters

<table>
  <tbody>
    <tr>
      <td>
        <code>bufferSize</code>
      </td>
      <td> The number of consecutive values to collect before emitting a buffered array</td>
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
        (excluding the <code>equal</code> and <code>allowSignalWrites</code> properties)
      </td>
    </tr>
  </tbody>
</table>

## Example

### Buffered stock price history

```ts
@Component()
export class MyComponent {
  readonly signalPipe = createSignalPipe();

  stockPrice: Signal<number> = signal(10);
  stockPriceHistory: Signal<number[]> = signalPipe(source, bufferCount(3)); // Analyze or visualize the buffered stock price history

  ngOnInit() {
    this.stockPrice.set(11);
    this.stockPrice.set(12);
    console.log(this.stockPriceHistory); // [10, 11, 12]
  }
}
```
