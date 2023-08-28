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

export function debounceTime<T>(
  dueTime: number,
  initialValue?: T,
  options: SignalDebounceTimeOptions<T> = {}
): SignalOperatorFunction<T, T> {
  return (source: Signal<T>): Signal<T> => {
    options.injector ?? assertInInjectionContext(debounceTime);
    const value = isUndefined(initialValue) ? source() : initialValue;
    const debouncedSignal: WritableSignal<T> = signal(value, options);

    effect(
      (cleanup) => {
        const sourceValue = source();

        const timeout = setTimeout(
          () => debouncedSignal.set(sourceValue),
          dueTime
        );

        cleanup(() => clearTimeout(timeout));
      },
      { ...options, allowSignalWrites: true, manualCleanup: true }
    );

    return debouncedSignal.asReadonly();
  };
}

export type SignalDebounceTimeOptions<T> = CreateSignalOptions<T> &
  Omit<CreateEffectOptions, 'allowSignalWrites' | 'manualCleanup'>;
