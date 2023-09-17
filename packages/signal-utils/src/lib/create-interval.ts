import {
  CreateEffectOptions,
  CreateSignalOptions,
  Signal,
  assertInInjectionContext,
  effect,
  signal,
} from '@angular/core';

type IntervalRef = ReturnType<typeof setInterval>;

export interface CreateIntervalResponse {
  interval: Signal<number>;
  resetInterval: () => void;
}

export function createInterval(
  period = 0,
  initialValue = 0,
  options: SignalIntervalOptions = {}
): CreateIntervalResponse {
  options.injector ?? assertInInjectionContext(createInterval);

  const source = signal<number>(initialValue, options);
  let intervalRef: IntervalRef;

  if (period <= 0) {
    period = 1;
  }

  const startInterval = (): (() => void) => {
    clearInterval(intervalRef);

    intervalRef = setInterval(() => {
      source.update((val) => val + period);
    }, period);

    return () => clearInterval(intervalRef);
  };

  const clear = startInterval();

  effect((cleanUp) => cleanUp(clear), {
    ...options,
    manualCleanup: true,
  });

  return {
    interval: source.asReadonly(),
    resetInterval(): void {
      clear();
      source.set(initialValue);
      startInterval();
    },
  };
}

export type SignalIntervalOptions = CreateSignalOptions<number> &
  Omit<CreateEffectOptions, 'allowSignalWrites' | 'manualCleanup'>;
