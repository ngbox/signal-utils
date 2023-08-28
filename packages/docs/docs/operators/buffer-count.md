---
sidebar_position: 6
---

# bufferCount

<code>bufferCount</code> operator collects a specified number of consecutive values from the source signal and emits them as an array. This can be particularly useful when you want to group signal emits into fixed-size arrays for processing or presentation.
<br/><br/>

```ts
bufferCount<T>(bufferSize: number, initialValue: Array<T> = [], options: SignalBufferCountOptions<T> = {}): T[]
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
        <code>initialValue</code>
      </td>
      <td>
        The initial value of the buffered array. This value will be used until the first buffer-counted emit occurs.
        Optional. Default is <code>[]</code>
      </td>
    </tr>
  </tbody>
</table>

## Example

### Buffered stock price history

```ts
stockPrice: Signal<number> = signal(10);
initialBuffer: number[] = [0, 0, 0]; // Initial values for stock prices
bufferedStockPriceHistory: Signal<number[]>  = pipeSignal(source, bufferCount(3, initialBuffer)); // Analyze or visualize the buffered stock price history
```
