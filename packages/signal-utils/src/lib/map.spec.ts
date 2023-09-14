import {
  Component,
  Injector,
  OnInit,
  Signal,
  inject,
  signal,
} from '@angular/core';
import { pipeSignal } from './pipe-signal';
import { map } from './map';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('map', () => {
  it('set initial value of source to the new signal', () => {
    TestBed.runInInjectionContext(() => {
      const source = signal<number>(0);
      const mapped = pipeSignal(
        source,
        map((val) => val + 1)
      );
      expect(mapped()).toBe(1);
    });
  });

  describe('work with async updates', () => {
    @Component({
      standalone: true,
      template: '{{mapped()}}',
    })
    class HostComponent {
      readonly source = signal(0);
      readonly mapped = pipeSignal(
        this.source,
        map((x) => x * 2)
      );
    }
    let component: HostComponent;
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(HostComponent);
      component = fixture.componentInstance;
    });

    it('update mapped value when source is updated', () => {
      component.source.set(5);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toBe('10');
    });
  });

  it('work with given injector', () => {
    let injector!: Injector;
    TestBed.runInInjectionContext(() => {
      injector = inject(Injector);
    });
    const source = signal<number>(5);
    const delayed = pipeSignal(
      source,
      map((x) => x * 4, { injector })
    );
    expect(delayed()).toBe(20);
  });

  describe('work with async updates', () => {
    @Component({
      standalone: true,
      template: '{{mapped()}}',
    })
    class HostComponent implements OnInit {
      readonly source = signal(0);
      readonly injector = inject(Injector);
      mapped!: Signal<number>;

      ngOnInit(): void {
        this.mapped = pipeSignal(
          this.source,
          map((x) => x * 4, { injector: this.injector })
        );
      }
    }
    let component: HostComponent;
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(HostComponent);
      component = fixture.componentInstance;
    });

    it('update mapped value when source is updated', () => {
      component.source.set(5);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toBe('20');
    });
  });
});
