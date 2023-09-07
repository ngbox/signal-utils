import { CreateSignalOptions, Signal, effect, signal } from '@angular/core';

export function interval(
  period = 0,
  initialValue = 0,
  options: SignalIntervalOptions = {}
): Signal<number> {
  const source = signal<number>(initialValue, options);

  if (period <= 0) {
    period = 1;
  }

  const interval = setInterval(() => {
    source.update((val) => (val ?? 0) + period);
  }, period);

  effect((cleanUp) => cleanUp(() => clearInterval(interval)), {
    manualCleanup: true,
  });

  return source.asReadonly();
}

export type SignalIntervalOptions = CreateSignalOptions<number>;
