---
sidebar_position: 2
---

# createInterval

<code>createInterval</code> function generates a read-only signal that emits values at a regular interval. This is useful for scenarios where you want to receive updates or triggers periodically.
<br/><br/>

```ts
createInterval(period = 0, initialValue = 0, options: SignalIntervalOptions = {}): CreateIntervalResponse
```

## Parameters

<table>
  <tbody>
    <tr>
      <td>
        <code>period</code>
      </td>
      <td> The time interval (in milliseconds) between each emitted value</td>
    </tr>
    <tr>
      <td> 
        <code>initialValue</code>
      </td>
      <td>
        The initial value to emit before starting the regular interval emissions.
        Optional. Default is <code>0</code>
      </td>
    </tr>
  </tbody>
</table>

## Returns CreateIntervalResponse

<table>
  <tbody>
    <tr>
      <td>
        <code>interval: Signal&lt;boolean></code>
      </td>
      <td> A read-only signal that emits values at a regular interval.</td>
    </tr>
    <tr>
      <td> 
        <code>resetInterval: function</code>
      </td>
      <td>
        A function that resets the interval whenever it is called.
      </td>
    </tr>
  </tbody>
</table>

## Example

### Buffered stock price history

```ts
const { interval, resetInterval } = createInterval(0, 2500);

// Access the current value of the interval
const currentValue = interval();
console.log('Value:', interval());

effect(() => {
  const value = interval();
  // do something...
});

// Restart the interval
resetInterval();
```
