import { signal } from '@angular/core';
import { pipeSignal } from './pipe-signal';
import { map } from './map';
import { TestBed } from '@angular/core/testing';

describe('map', () => {
  it('should update value', () => {
    TestBed.runInInjectionContext(() => {
      const source = signal<number>(0);
      const mapped = pipeSignal(
        source,
        map((val) => val + 1)
      );
      expect(mapped()).toBe(1);
    });
  });
  it('should return mapped value', () => {
    TestBed.runInInjectionContext(() => {
      const source = signal<number>(0);
      const mapped = pipeSignal(
        source,
        map(() => 'mappedValue')
      );
      expect(mapped()).toBe('mappedValue');
    });
  });
});
