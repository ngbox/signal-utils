import {
  CreateEffectOptions,
  CreateSignalOptions,
  Signal,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
import { SignalOperatorFunction } from './types';

export function delay<T>(
  delayDuration: number,
  options: SignalDelayOptions<T> = {}
): SignalOperatorFunction<T, T> {
  return (source: Signal<T>): Signal<T> => {
    const delayedSignal: WritableSignal<T> = signal(source(), options);

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
  Omit<CreateEffectOptions, 'allowSignalWrites' | 'injector'>;
