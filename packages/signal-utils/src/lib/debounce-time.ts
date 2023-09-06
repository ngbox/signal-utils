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

export function debounceTime<T>(
  dueTime: number,
  options: SignalDebounceTimeOptions<T> = {}
): SignalOperatorFunction<T, T> {
  return (source: Signal<T>): Signal<T> => {
    options.injector ?? assertInInjectionContext(debounceTime);
    const debouncedSignal: WritableSignal<T> = signal(source(), options);

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
