---
sidebar_position: 1
---

# Getting Started

Welcome to the documentation for Signal Utils! This guide will help you get started with using the library to work with signals in your Angular applications.

## Installation

To start using Your Signal Library in your Angular project, follow these steps:

1. Install the library using npm or yarn:

```sh
 npm install ng-signal-utils
```

```sh
 yarn add ng-signal-utils
```

## Using Signal Operators

Signal Utils provides operators that allow you to transform, filter, debounce, and more, just like in RxJS. Here's an example using the <code>filter</code> operator.

```ts
userActivity = signal(0);
filteredActivity = pipeSignal(userActivity, filter((activity) => activity !== 'Inactive');
```

## Additional Resources

<a target="_blank" href="https://github.com/ngbox/signal-utils"> Github </a> <br /><br />
<a target="_blank" href="https://github.com/ngbox/signal-utils"> Medium -link will be added- </a>
