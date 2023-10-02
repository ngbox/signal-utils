import {
  CreateEffectOptions,
  CreateSignalOptions,
  Signal,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
import { SignalOperatorFunction } from './types';

export function bufferCount<T>(
  bufferSize: number,
  options: SignalBufferCountOptions<T> = {}
): SignalOperatorFunction<T, T[]> {
  if (bufferSize <= 0) {
    bufferSize = 1;
  }

  return (source: Signal<T>): Signal<T[]> => {
    let index = 0;
    let values: Array<T> = [];

    const bufferCountedSignal: WritableSignal<Array<T>> = signal<Array<T>>([], {
      ...options,
      equal: () => false,
    });

    const pushValue = (value: T): void => {
      index++;
      values.push(value);
    };

    const clear = (): void => {
      values = [];
      index = 0;
    };

    const shouldEmit = (): boolean => {
      return index === bufferSize;
    };

    effect(
      () => {
        const sourceValue = source();
        pushValue(sourceValue);
        if (shouldEmit()) {
          bufferCountedSignal.set([...values]);
          clear();
        }
      },
      { ...options, allowSignalWrites: true }
    );
    return bufferCountedSignal.asReadonly();
  };
}

export type SignalBufferCountOptions<T> = Omit<
  CreateSignalOptions<T>,
  'equal'
> &
  Omit<CreateEffectOptions, 'allowSignalWrites' | 'injector'>;
