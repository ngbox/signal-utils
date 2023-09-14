import { Component, Injector, inject, signal } from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { pipeSignal } from './pipe-signal';
import { delay } from './delay';

describe('delay', () => {
  it('emit initial value instantly', () => {
    TestBed.runInInjectionContext(() => {
      const source = signal<number>(5);
      const delayed = pipeSignal(source, delay(5000));
      expect(delayed()).toBe(5);
    });
  });

  it('work with given injector', () => {
    let injector!: Injector;
    TestBed.runInInjectionContext(() => {
      injector = inject(Injector);
    });
    const source = signal<number>(5);
    const delayed = pipeSignal(source, delay(5000, { injector }));
    expect(delayed()).toBe(5);
  });

  describe('work with async updates', () => {
    @Component({
      standalone: true,
      template: '{{delayed()}}',
    })
    class HostComponent {
      readonly source = signal(0);
      readonly delayed = pipeSignal(this.source, delay(2000));
    }
    let component: HostComponent;
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(HostComponent);
      component = fixture.componentInstance;
    });

    it('emit values after the given period of time', fakeAsync(() => {
      component.source.set(10);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toBe('0');

      tick(2000);
      fixture.detectChanges();

      expect(fixture.nativeElement.textContent).toBe('10');
    }));
  });
});
