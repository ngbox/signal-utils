---
sidebar_position: 6
---

# debounceTime

<code>debounceTime</code> operator delays the emission of signal until a specified amount of time has passed since the last emit.
This can be useful for scenarios where you want to react to changes in a signal but only after a certain quiet period has elapsed.
<br/><br/>

```ts
debounceTime<T>(dueTime: number, options: SignalDebounceTimeOptions<T> = {}): T
```

## Parameters

<table>
  <tbody>
    <tr>
      <td>
        <code>dueTime</code>
      </td>
      <td>
        The amount of time (in milliseconds) to wait after a signal is emitted before allowing it to be further processed. If another signal is emitted during this delay period, the timer resets
      </td>
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
        (excluding the <code>allowSignalWrites</code> and <code>manualCleanup</code> properties)
      </td>
    </tr>

  </tbody>
</table>

## Example

### Debounced search query

```ts
@Component()
export class MyComponent {
  searchQuery: Signal<string> = signal('');
  debouncedSearchQuery: Signal<string> = signalPipe(source, debounceTime(500));
}
```
