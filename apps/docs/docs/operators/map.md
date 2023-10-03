---
sidebar_position: 6
---

# map

<code>map</code> is an operator that let you transform the values emitted by the source signal. It takes each value, applies a provided function to it, and emits the result as a new value in the target signal.
<br/><br/>

```ts
map<T, K>(mapFn: (value: T) => K, options: SignalMapOptions<K> = {}): K
```

## Parameters

<table>
  <tbody>
    <tr>
      <td>
        <code>mapFn</code>
      </td>
      <td>The callback to transform the emitted values from the source signal.</td>
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

```ts
const signalPipe = createSignalPipe();
source = signal(10);
square = signalPipe(source, map(val) => val * val); // 100
```

:::info

**map** doesn't track the changes of any signals used in the given callback function.

:::
