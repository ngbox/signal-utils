import {
  CreateEffectOptions,
  CreateSignalOptions,
  Signal,
  WritableSignal,
  signal,
} from '@angular/core';
import { SignalOperatorFunction } from './types';

export function replaceNullishWith<T>(
  defaultValue: T,
  options: SignalReplaceNullishWithOptions<T | undefined> = {}
): SignalOperatorFunction<T | null | undefined, T> {
  return (source: Signal<T | null | undefined>): Signal<T> => {
    const filteredSignal: WritableSignal<T> = signal(
      source() ?? defaultValue,
      options
    );

    return filteredSignal.asReadonly();
  };
}

export type SignalReplaceNullishWithOptions<T> = CreateSignalOptions<T> &
  Omit<CreateEffectOptions, 'allowSignalWrites' | 'injector'>;
