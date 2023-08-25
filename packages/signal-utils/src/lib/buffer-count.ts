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

export function bufferCount<T>(
  count: number,
  initialValue: Array<T> = [],
  options: SignalBufferCountOptions<T> = {}
): SignalOperatorFunction<T, T[]> {
  if (count <= 0) {
    count = 1;
  }

  return (source: Signal<T>): Signal<T[]> => {
    options.injector ?? assertInInjectionContext(bufferCount);

    let index = 0;
    let values: Array<T> = [];

    const bufferCountedSignal: WritableSignal<Array<T>> = signal<Array<T>>(
      initialValue,
      {
        ...options,
        equal: () => false,
      }
    );

    const pushValue = (value: T) => {
      index++;
      values.push(value);
    };

    const clear = () => {
      values = [];
      index = 0;
    };

    const shouldEmit = () => {
      return index === count;
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
  Omit<CreateEffectOptions, 'allowSignalWrites'>;
