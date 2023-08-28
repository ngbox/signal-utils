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

export function throttleTime<T>(
  throttleDuration: number,
  options: SignalThrottleTimeOptions<T> = {}
): SignalOperatorFunction<T, T> {
  return (source: Signal<T>): Signal<T> => {
    options.injector ?? assertInInjectionContext(throttleTime);

    const throttledSignal: WritableSignal<T> = signal(source(), options);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let timeout: any | undefined;
    let throttling: boolean;

    const clear = () => {
      clearTimeout(timeout);
      timeout = undefined;
      throttling = false;
    };

    const startThrottling = () => {
      throttling = true;
      timeout = setTimeout(() => {
        throttling = false;
        clear();
      }, throttleDuration);
    };

    startThrottling();

    effect(
      () => {
        const sourceValue = source();
        if (throttling) {
          return;
        }
        throttledSignal.set(sourceValue);
        startThrottling();
      },
      { ...options, allowSignalWrites: true }
    );

    return throttledSignal.asReadonly();
  };
}

export type SignalThrottleTimeOptions<T> = CreateSignalOptions<T> &
  Omit<CreateEffectOptions, 'allowSignalWrites'>;
