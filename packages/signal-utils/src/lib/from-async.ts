import {
  CreateEffectOptions,
  CreateSignalOptions,
  DestroyRef,
  Signal,
  WritableSignal,
  assertInInjectionContext,
  signal,
} from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import {
  Observable,
  catchError,
  Subject,
  startWith,
  tap,
  switchMap,
  EMPTY,
} from 'rxjs';

export type FromAsyncOptions<T> = CreateSignalOptions<T> &
  CreateEffectOptions & { initialValue: T };

export interface FromAsyncResponse<T, K> {
  data: WritableSignal<T>;
  loading: Signal<boolean>;
  error: Signal<K | null>;
  refresh: () => void;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromAsync<T, K = any>(
  observable$: Observable<T>,
  options: FromAsyncOptions<T>
): FromAsyncResponse<T, K> {
  options.injector ?? assertInInjectionContext(fromAsync);
  const refresher$ = new Subject<void>();

  const loading = signal(false);
  const data = signal<T>(options.initialValue);
  const error = signal<K | null>(null);

  const onError = (err: K): Observable<never> => {
    error.set(err);
    loading.set(false);
    return EMPTY;
  };

  const startFetching = (): void => {
    refresher$
      .pipe(
        startWith(0),
        tap(() => loading.set(true)),
        switchMap(() => observable$),
        catchError(onError),
        takeUntilDestroyed(options.injector?.get(DestroyRef))
      )
      .subscribe((resp) => {
        data.set(resp);
        loading.set(false);
      });
  };

  const refresh = (): void => refresher$.next();

  startFetching();

  return {
    loading: loading.asReadonly(),
    data,
    refresh,
    error: error.asReadonly(),
  };
}
