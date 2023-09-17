import {
  CreateEffectOptions,
  CreateSignalOptions,
  Signal,
  assertInInjectionContext,
  effect,
  signal,
} from '@angular/core';

type Interval = ReturnType<typeof setInterval>;

export function interval(
  period = 0,
  initialValue = 0,
  options: SignalIntervalOptions = {}
): Signal<number> {
  options.injector ?? assertInInjectionContext(interval);

  const source = signal<number>(initialValue, options);
  let intervalRef: Interval;

  if (period <= 0) {
    period = 1;
  }

  const startInterval = (): (() => void) => {
    clearInterval(intervalRef);

    intervalRef = setInterval(() => {
      source.update((val) => (val ?? 0) + period);
    }, period);

    return () => clearInterval(intervalRef);
  };

  const clear = startInterval();

  effect((cleanUp) => cleanUp(clear), {
    ...options,
    manualCleanup: true,
  });

  return source.asReadonly();
}

export type SignalIntervalOptions = CreateSignalOptions<number> &
  Omit<CreateEffectOptions, 'allowSignalWrites' | 'manualCleanup'>;
