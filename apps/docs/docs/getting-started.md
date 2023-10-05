---
sidebar_position: 1
---

# Getting Started

Welcome to the documentation for Signal Utils! This guide will help you get started with using the library to work with signals in your Angular applications.

## Installation

To start using @ngbox/signal-utils in your Angular project, follow these steps:

1. Install the library using npm or yarn:

```sh
 npm install @ngbox/signal-utils
```

```sh
 yarn add @ngbox/signal-utils
```

## Use Signal Operators and Utilities

Signal Utils provides operators that allow you to transform, filter, debounce, and more, just like in RxJS. Here's an example using the <code>filter</code> operator.

```ts
@Component({
  template: `
    <span> interval: {{ intervalRef.interval() }} </span>
    <span> last 3 fibonacci number: {{ last3FibonacciNumber() }} </span>
  `,
})
export class MyComponent {
  readonly intervalRef = createInterval();

  readonly last3FibonacciNumber = signalPipe(
    this.intervalRef.interval(),
    filter((value) => isFibonacci(value)),
    bufferCount(3)
  );
}
```

## Additional Resources

<a target="_blank" href="https://github.com/ngbox/signal-utils"> Github </a> <br /><br />
<a target="_blank" href="https://github.com/ngbox/signal-utils"> Medium -link will be added- </a>
