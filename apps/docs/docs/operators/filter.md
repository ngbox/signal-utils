---
sidebar_position: 6
---

# filter

<code>filter</code> operator filters values emitted by the source based on a provided predicate function.
<br/><br/>

```ts
filter<T>(filterFn: (value: T) => boolean, options: SignalFilterOptions<T> = {}): T
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

### Handle the filtered user activities

```ts
const signalPipe = createSignalPipe();
userActivity = signal(0);
filteredActivity = signalPipe(userActivity, filter((activity) => activity !== 'Inactive');
```
