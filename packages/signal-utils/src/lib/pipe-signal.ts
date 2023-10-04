import {
  Injector,
  Signal,
  assertInInjectionContext,
  inject,
  isSignal,
  runInInjectionContext,
} from '@angular/core';
import { SignalOperatorFunction } from './types';

type Source<T> = Signal<T>;
type SourceWithInjector<T> = { injector: Injector; source: Source<T> };

type SourceOrSourceWithInjector<T> = Source<T> | SourceWithInjector<T>;

export function signalPipe<T, A>(
  source: SourceOrSourceWithInjector<T>,
  fn1: SignalOperatorFunction<T, A>
): Signal<A>;
export function signalPipe<T, A, B>(
  source: SourceOrSourceWithInjector<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>
): Signal<B>;
export function signalPipe<T, A, B, C>(
  source: SourceOrSourceWithInjector<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>
): Signal<C>;
export function signalPipe<T, A, B, C, D>(
  source: SourceOrSourceWithInjector<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>
): Signal<D>;
export function signalPipe<T, A, B, C, D, E>(
  source: SourceOrSourceWithInjector<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>,
  fn5: SignalOperatorFunction<D, E>
): Signal<E>;
export function signalPipe<T, A, B, C, D, E, F>(
  source: SourceOrSourceWithInjector<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>,
  fn5: SignalOperatorFunction<D, E>,
  fn6: SignalOperatorFunction<E, F>
): Signal<F>;
export function signalPipe<T, A, B, C, D, E, F, G>(
  source: SourceOrSourceWithInjector<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>,
  fn5: SignalOperatorFunction<D, E>,
  fn6: SignalOperatorFunction<E, F>,
  fn7: SignalOperatorFunction<F, G>
): Signal<G>;
export function signalPipe<T, A, B, C, D, E, F, G, H>(
  source: SourceOrSourceWithInjector<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>,
  fn5: SignalOperatorFunction<D, E>,
  fn6: SignalOperatorFunction<E, F>,
  fn7: SignalOperatorFunction<F, G>,
  fn8: SignalOperatorFunction<G, H>
): Signal<H>;
export function signalPipe<T, A, B, C, D, E, F, G, H, I>(
  source: SourceOrSourceWithInjector<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>,
  fn5: SignalOperatorFunction<D, E>,
  fn6: SignalOperatorFunction<E, F>,
  fn7: SignalOperatorFunction<F, G>,
  fn8: SignalOperatorFunction<G, H>,
  fn9: SignalOperatorFunction<H, I>
): Signal<I>;
export function signalPipe<T, A, B, C, D, E, F, G, H, I>(
  source: SourceOrSourceWithInjector<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>,
  fn5: SignalOperatorFunction<D, E>,
  fn6: SignalOperatorFunction<E, F>,
  fn7: SignalOperatorFunction<F, G>,
  fn8: SignalOperatorFunction<G, H>,
  fn9: SignalOperatorFunction<H, I>,
  ...fns: SignalOperatorFunction<unknown, unknown>[]
): Signal<unknown>;

export function signalPipe<T>(
  sourceOrWithInjector: SourceOrSourceWithInjector<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...signalPipeKinds: Array<SignalOperatorFunction<T, any>>
): Signal<unknown> {
  let injector: Injector;
  let source: Signal<T>;

  if (isSignal(sourceOrWithInjector)) {
    assertInInjectionContext(signalPipe);
    injector = inject(Injector);
    source = sourceOrWithInjector;
  } else {
    injector = sourceOrWithInjector.injector;
    source = sourceOrWithInjector.source;
  }

  return runInInjectionContext(injector, () =>
    signalPipeKinds.reduce((prev, fn) => fn(prev), source)
  );
}

/**
 *
 * Creates a signal pipe with the given injector or context.
 * @param _injector the injector which will satisfy calls to [`inject`] while signal operations
 *     are executing
 * @returns the internal signalPipe function's itself which runs in injection context.
 */
export function createSignalPipe(_injector?: Injector): typeof signalPipe {
  _injector ?? assertInInjectionContext(createSignalPipe);
  const injector = _injector ?? inject(Injector);
  return <T>(...params: Parameters<typeof signalPipe<T, unknown>>) =>
    runInInjectionContext(injector, () => signalPipe(...params));
}
