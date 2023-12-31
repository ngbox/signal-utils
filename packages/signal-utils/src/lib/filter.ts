import {
  CreateEffectOptions,
  CreateSignalOptions,
  Signal,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
import { SignalOperatorFunction } from './types';

export function filter<T>(
  predicate: (value: T) => boolean,
  options: SignalFilterOptions<T | null> = {}
): SignalOperatorFunction<T, T | null> {
  return (source: Signal<T>): Signal<T | null> => {
    const value = predicate(source()) ? source() : null;
    const filteredSignal: WritableSignal<T | null> = signal(value, options);

    effect(
      () => {
        const sourceValue = source();
        predicate(sourceValue) && filteredSignal.set(sourceValue);
      },
      { ...options, allowSignalWrites: true }
    );

    return filteredSignal.asReadonly();
  };
}

export type SignalFilterOptions<T> = CreateSignalOptions<T> &
  Omit<CreateEffectOptions, 'allowSignalWrites' | 'injector'>;
