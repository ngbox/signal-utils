import {
  CreateEffectOptions,
  CreateSignalOptions,
  Signal,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
import { SignalOperatorFunction } from './types';

export function map<T, K>(
  mapFn: (value: T) => K,
  options: SignalMapOptions<K> = {}
): SignalOperatorFunction<T, K> {
  return (source: Signal<T>): Signal<K> => {
    const mapped: WritableSignal<K> = signal(mapFn(source()), options);

    effect(
      () => {
        const sourceValue = source();
        mapped.set(mapFn(sourceValue));
      },
      { ...options, allowSignalWrites: true }
    );

    return mapped.asReadonly();
  };
}

export type SignalMapOptions<T> = CreateSignalOptions<T> &
  Omit<CreateEffectOptions, 'allowSignalWrites' | 'injector'>;
