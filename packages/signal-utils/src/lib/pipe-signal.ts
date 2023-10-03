import {
  Injector,
  Signal,
  assertInInjectionContext,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { SignalOperatorFunction } from './types';

function signalPipe<T, A>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>
): Signal<A>;
function signalPipe<T, A, B>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>
): Signal<B>;

function signalPipe<T, A, B, C>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>
): Signal<C>;
function signalPipe<T, A, B, C, D>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>
): Signal<D>;
function signalPipe<T, A, B, C, D, E>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>,
  fn5: SignalOperatorFunction<D, E>
): Signal<E>;
function signalPipe<T, A, B, C, D, E, F>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>,
  fn5: SignalOperatorFunction<D, E>,
  fn6: SignalOperatorFunction<E, F>
): Signal<F>;
function signalPipe<T, A, B, C, D, E, F, G>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>,
  fn5: SignalOperatorFunction<D, E>,
  fn6: SignalOperatorFunction<E, F>,
  fn7: SignalOperatorFunction<F, G>
): Signal<G>;
function signalPipe<T, A, B, C, D, E, F, G, H>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>,
  fn5: SignalOperatorFunction<D, E>,
  fn6: SignalOperatorFunction<E, F>,
  fn7: SignalOperatorFunction<F, G>,
  fn8: SignalOperatorFunction<G, H>
): Signal<H>;
function signalPipe<T, A, B, C, D, E, F, G, H, I>(
  source: Signal<T>,
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
function signalPipe<T, A, B, C, D, E, F, G, H, I>(
  source: Signal<T>,
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

function signalPipe<T>(
  source: Signal<T>,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ...signalPipeKinds: Array<SignalOperatorFunction<T, any>>
): Signal<unknown> {
  return signalPipeKinds.reduce((prev, fn) => fn(prev), source);
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
