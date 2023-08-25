import { CreateSignalOptions, effect, signal } from '@angular/core';

export function interval(
  period = 0,
  initialValue = 0,
  options: SignalIntervalOptions<number> = {}
) {
  const source = signal(initialValue, options);

  if (period <= 0) {
    period = 1;
  }

  const interval = setInterval(() => {
    source.update((val) => (val ?? 0) + period);
  }, period);

  effect((cleanUp) => cleanUp(() => clearInterval(interval)), {
    manualCleanup: true,
  });
}

export type SignalIntervalOptions<T> = CreateSignalOptions<T>;
