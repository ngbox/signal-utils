// import {
//   CreateEffectOptions,
//   CreateSignalOptions,
//   Signal,
//   WritableSignal,
//   assertInInjectionContext,
//   effect,
//   signal,
// } from '@angular/core';
// import { SignalOperatorFunction } from './types';

// export function tap<T>(
//   // eslint-disable-next-line @typescript-eslint/no-explicit-any
//   tapFn: (value: T) => any,
//   options: SignalTapOptions<T> = {}
// ): SignalOperatorFunction<T, T> {
//   return (source: Signal<T>): Signal<T> => {
//     options.injector ?? assertInInjectionContext(tap);

//     const tappedSignal: WritableSignal<T> = signal(source(), options);

//     effect(
//       () => {
//         const sourceValue = source();
//         tapFn(sourceValue);
//         tappedSignal.set(sourceValue);
//       },
//       { ...options, allowSignalWrites: true }
//     );

//     return tappedSignal.asReadonly();
//   };
// }

// export type SignalTapOptions<T> = CreateSignalOptions<T> &
//   Omit<CreateEffectOptions, 'allowSignalWrites'>;
