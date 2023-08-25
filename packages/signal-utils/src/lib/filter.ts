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

export function filter<T>(
  filterFn: (value: T) => boolean,
  initialValue: T,
  options: SignalFilterOptions<T> = {}
): SignalOperatorFunction<T, T> {
  return (source: Signal<T>): Signal<T> => {
    options.injector ?? assertInInjectionContext(filter);
    const value = isUndefined(initialValue) ? source() : initialValue;
    const filteredSignal: WritableSignal<T> = signal(value, options);

    effect(
      () => {
        const sourceValue = source();
        filterFn(sourceValue) && filteredSignal.set(sourceValue);
      },
      { ...options, allowSignalWrites: true }
    );

    return filteredSignal.asReadonly();
  };
}

export type SignalFilterOptions<T> = CreateSignalOptions<T> &
  Omit<CreateEffectOptions, 'allowSignalWrites'>;
