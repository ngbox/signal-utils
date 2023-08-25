import { Signal } from '@angular/core';
import { SignalOperatorFunction } from './types';

export function pipeSignal<T, A>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>
): Signal<A>;
export function pipeSignal<T, A, B>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>
): Signal<B>;
export function pipeSignal<T, A, B, C>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>
): Signal<C>;
export function pipeSignal<T, A, B, C, D>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>
): Signal<D>;
export function pipeSignal<T, A, B, C, D, E>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>,
  fn5: SignalOperatorFunction<D, E>
): Signal<E>;
export function pipeSignal<T, A, B, C, D, E, F>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>,
  fn5: SignalOperatorFunction<D, E>,
  fn6: SignalOperatorFunction<E, F>
): Signal<F>;
export function pipeSignal<T, A, B, C, D, E, F, G>(
  source: Signal<T>,
  fn1: SignalOperatorFunction<T, A>,
  fn2: SignalOperatorFunction<A, B>,
  fn3: SignalOperatorFunction<B, C>,
  fn4: SignalOperatorFunction<C, D>,
  fn5: SignalOperatorFunction<D, E>,
  fn6: SignalOperatorFunction<E, F>,
  fn7: SignalOperatorFunction<F, G>
): Signal<G>;
export function pipeSignal<T, A, B, C, D, E, F, G, H>(
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
export function pipeSignal<T, A, B, C, D, E, F, G, H, I>(
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
export function pipeSignal<T, A, B, C, D, E, F, G, H, I>(
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
  ...fns: SignalOperatorFunction<any, any>[]
): Signal<unknown>;

export function pipeSignal<T>(
  source: Signal<T>,
  ...pipeSignalKinds: Array<SignalOperatorFunction<T, any>>
) {
  return pipeSignalKinds.reduce((prev, fn) => fn(prev), source);
}
