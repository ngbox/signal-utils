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
  options: SignalFilterOptions<T | undefined> = {}
): SignalOperatorFunction<T, T | undefined> {
  return (source: Signal<T>): Signal<T | undefined> => {
    const value = predicate(source()) ? source() : undefined;
    const filteredSignal: WritableSignal<T | undefined> = signal(
      value,
      options
    );

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
