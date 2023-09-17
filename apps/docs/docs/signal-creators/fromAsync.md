---
sidebar_position: 1
---

# fromAsync

<code>fromAsync</code> is a utility function designed to simplify asynchronous data handling when working with Angular signals using observables. It takes an observable as input and returns an object containing signals for loading, data, and error states along with a "refresh" function.

<br/><br/>

```ts
fromAsync<DataType, ErrorType>(observable$: Observable<T>, options: FromAsyncOptions<T>): FromAsyncResponse<DataType, ErrorType>
```

## Parameters

<table>
  <tbody>
    <tr>
      <td>
        <code>observable$</code>
      </td>
      <td>The observable to be monitored for data loading and error handling.</td>
    </tr>
    <tr>
      <td> 
        <code>options</code>
      </td>
      <td>
        The combination of
        <a target="_blank" href="https://angular.io/api/core/CreateEffectOptions"> CreateEffectOptions </a> and 
        <a target="_blank" href="https://angular.io/api/core/CreateSignalOptions"> CreateSignalOptions </a> and
        <code>initialValue*</code> which represent the value of <code>data</code> signal until the fetch is completed successfully.
      </td>
    </tr>
  </tbody>
</table>

## Returns FromAsyncResponse

<table>
  <tbody>
    <tr>
      <td>
        <code>loading: Signal&lt;boolean></code>
      </td>
      <td> A signal that indicates whether the operation is in progress.</td>
    </tr>
    <tr>
      <td> 
        <code>data: Signal&lt;DataType></code>
      </td>
      <td>
        A signal that emits the data when the operation is successful.
      </td>
    </tr>
    <tr>
      <td> 
        <code>error: Signal&lt;ErrorType></code>
      </td>
      <td>
        A signal that emits an error message when the operation encounters an error.
      </td>
    </tr>
    <tr>
      <td> 
        <code>refresh: function</code>
      </td>
      <td>
        A function that allows you to manually trigger a data refresh
      </td>
    </tr>
  </tbody>
</table>

## Example

### Fetch and Mutate Todos

```ts
private obs$: Observable<Todo[]> = inject(APIService).getTodos$();
query = fromAsync(this.obs$, { initialValue: [] });

constructor() {
    effect(() => {
        const error = this.query.error();
        if (error) {
        // do something with error
        }
    });
}

refresh() {
    this.query.refresh();
}

mutateData(id: string) {
    this.query.data.mutate((todos) => {
        const todo = todos.find((x) => x.id === id);
        todo.completed = !item.completed;
    });
}
```
