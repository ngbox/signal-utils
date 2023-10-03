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

### Basic Usage

```ts
ŒComponent({
  template: 'Interval: {{ intervalRef.interval() }}'
})
export class TodoExampleComponent {
  readonly intervalRef = createInterval(0, 2500);

  constructor() {
    readonly value = this.intervalRef.interval();
    console.log('Value:', value);

    effect(() => {
      const value = this.intervalRef.interval();
      // do something when it ticks...
    });
  }

  reset() {
    this.intervalRef.resetInterval();
  }
}

```

### Usage at outside of Injection Context

```ts
@Injetable()
export class TodoExampleComponent {
  private readonly injector = inject(Injector);

  create(): CreateIntervalResponse {
    return createInterval(0, 2500, { injector: this.injector });
  }
}
```

:::tip

**createInterval** automatically clears itself when the given injector instance is destroy.

:::
