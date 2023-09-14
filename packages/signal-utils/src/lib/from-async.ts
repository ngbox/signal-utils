import {
  CreateEffectOptions,
  CreateSignalOptions,
  DestroyRef,
  Injector,
  Signal,
  assertInInjectionContext,
  inject,
  signal,
} from '@angular/core';
import {
  Observable,
  ReplaySubject,
  catchError,
  takeUntil,
  throwError,
} from 'rxjs';

export type FromAsyncOptions<T> = CreateSignalOptions<T> &
  CreateEffectOptions & { initialValue: T | null };

export interface FromAsyncResponse<T, K> {
  data: Signal<T | null>;
  loading: Signal<boolean>;
  error: Signal<K | null>;
}

export function fromAsync<T, K>(
  observable$: Observable<T>,
  options: FromAsyncOptions<T>
): FromAsyncResponse<T, K> {
  options.injector ?? assertInInjectionContext(fromAsync);
  const injector = options.injector ?? inject(Injector);
  const destroyRef = injector.get(DestroyRef);

  const destroyer$ = new ReplaySubject<void>(1);
  destroyRef.onDestroy(() => destroyer$.next());

  const loading = signal(false);
  const data = signal<T | null>(options.initialValue);
  const error = signal<K | null>(null);

  const startFetching = (): void => {
    observable$
      .pipe(
        catchError((err) => {
          error.set(err);
          loading.set(false);
          return throwError(() => err);
        }),
        takeUntil(destroyer$)
      )
      .subscribe((resp) => {
        data.set(resp);
        loading.set(false);
      });
  };

  startFetching();

  return {
    loading,
    data,
    error,
  };
}
