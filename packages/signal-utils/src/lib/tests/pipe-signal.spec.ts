/* eslint-disable @typescript-eslint/no-explicit-any */
import { TestBed } from '@angular/core/testing';
import { createSignalPipe } from '../pipe-signal';
import { Injector, Signal, effect, inject, signal } from '@angular/core';
import { SignalOperatorFunction } from '../types';

describe('createSignalPipe', () => {
  const toString: SignalOperatorFunction<any, string> = jest.fn(
    (source: Signal<any>) => {
      const result = signal<string>(source().toString());
      effect(() => result.set(source().toString()));
      return result;
    }
  );

  const toNumber: SignalOperatorFunction<any, number> = jest.fn(
    (source: Signal<any>) => {
      const result = signal<number>(Number(source()));
      effect(() => result.set(Number(source())));
      return result;
    }
  );

  beforeEach(() => jest.clearAllMocks());

  it('call the given operator functions', () => {
    TestBed.runInInjectionContext(() => {
      const signalPipe = createSignalPipe();

      const source = signal<number>(0);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const mapped = signalPipe(source, toString, toNumber);

      expect(toString).toBeCalledTimes(1);
      expect(toNumber).toBeCalledTimes(1);
    });
  });

  it('call the given operator functions in the correct order', () => {
    TestBed.runInInjectionContext(() => {
      const signalPipe = createSignalPipe();

      const source = signal<number>(0);
      const mapped = signalPipe(source, toString, toNumber);

      expect(mapped()).toEqual(0);
      expect(typeof mapped()).toEqual('number');
    });
  });

  it('run the logic in Injection Context', () => {
    let injector;
    TestBed.runInInjectionContext(() => {
      injector = inject(Injector);
    });

    const signalPipe = createSignalPipe(injector);

    const source = signal<number>(0);
    const mapped = signalPipe(source, toString, toNumber);

    expect(mapped()).toEqual(0);
    expect(toString).toBeCalledTimes(1);
    expect(toNumber).toBeCalledTimes(1);
  });
});
