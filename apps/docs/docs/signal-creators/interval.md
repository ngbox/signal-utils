---
sidebar_position: 2
---

# interval

<code>interval</code> function generates a read-only signal that emits values at a regular interval. This is useful for scenarios where you want to receive updates or triggers periodically.
<br/><br/>

```ts
interval(period = 0, initialValue = 0, options: SignalIntervalOptions = {}): Signal<number>
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

## Example

### Buffered stock price history

```ts
heartbeat = interval(5000); // Create an interval signal that emits a "heartbeat" every 5000 milliseconds.
effect(() => {
  const beat = heartbeat();
  // Perform health checks
});
```
