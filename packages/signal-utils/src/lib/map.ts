import { CreateComputedOptions, Signal, computed } from '@angular/core';
import { SignalOperatorFunction } from './types';

export function map<T, K>(
  mapFn: (value: T) => K,
  options: SignalMapOptions<K> = {}
): SignalOperatorFunction<T, K> {
  return (source: Signal<T>): Signal<K> => {
    return computed(() => {
      const sourceValue = source();
      return mapFn(sourceValue);
    }, options);
  };
}

export type SignalMapOptions<T> = CreateComputedOptions<T>;
