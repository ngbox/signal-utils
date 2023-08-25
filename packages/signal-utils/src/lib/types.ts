import { Signal } from '@angular/core';

export interface SignalOperatorFunction<T, R> {
  (source: Signal<T>): Signal<R>;
}
