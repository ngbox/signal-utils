import {
  CreateEffectOptions,
  CreateSignalOptions,
  Signal,
  WritableSignal,
  assertInInjectionContext,
  effect,
  signal,
} from '@angular/core';
import { SignalOperatorFunction } from './types';
import { isUndefined } from './utils';

export function delay<T>(
  delayDuration: number,
  initialValue?: T,
  options: SignalDelayOptions<T> = {}
): SignalOperatorFunction<T, T> {
  return (source: Signal<T>): Signal<T> => {
    options.injector ?? assertInInjectionContext(delay);
    const value = isUndefined(initialValue) ? source() : initialValue;
    const delayedSignal: WritableSignal<T> = signal(value, options);

    effect(
      () => {
        const sourceValue = source();
        setTimeout(() => delayedSignal.set(sourceValue), delayDuration);
      },
      { ...options, allowSignalWrites: true }
    );

    return delayedSignal.asReadonly();
  };
}

export type SignalDelayOptions<T> = CreateSignalOptions<T> &
  Omit<CreateEffectOptions, 'allowSignalWrites'>;
