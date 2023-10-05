---
sidebar_position: 5
sidebar_label: Dealing with Injection Context
---

# Dealing with Injection Context

<a target="_blank" href="https://angular.io/guide/dependency-injection-context"> <code> Injection Context</code> </a>
is introduced with Angular 14. Based on the documentation, The dependency injection (DI) system relies internally on a runtime context where the current injector is available. This means that injectors can only work when code is executed in this context.
<br />
<br />
Furthermore, as <code>@ngbox/signal-utils</code> relies on Angular's <a target="_blank" href="https://angular.io/api/core/effect">effect </a> API internally, all operators must function within the injection context. Fortunately, once both the signal and operators are registered in the injection context, they handle all the necessary logic for you, enabling you to easily create an effect using a custom operator.
<br />
<br />
However, when you create a pipeSignal outside of injection context, you must at least pass an <a target="_blank" href="https://angular.io/api/core/Injector">Injector</a> to let all the internal logic works.

### createSignalPipe

<code>createSignalPipe</code> is a function can optionally take Injector as an input and returns an instance of <code>createSignal</code> function. This allows you to execute your code outside of the injection context.

```ts
@Injectable()
export class MyService {
  private signalPipe = createSignalPipe();

  readonly intervalRef = createInterval();

  readonly last3FibonacciNumber = this.signalPipe(
    this.intervalRef.interval(),
    filter((value) => isFibonacci(value)),
    bufferCount(3)
  );
}
```

### Passing an Injector as a parameter

<code>createSignal</code> function has an overload that allows you to pass an injector.

```ts
@Injectable()
export class MyService {
  private injector = inject(Injector);

  readonly intervalRef = createInterval();

  readonly last3FibonacciNumber = signalPipe(
    { source: this.intervalRef.interval, injector: this.injector },
    filter((value) => isFibonacci(value)),
    bufferCount(3)
  );
}
```

Once the injected or given injector destroyed, <code>@ngbox/signal-utils</code> clears up all the internal necessary logic to not be a cause of a memory leak.
