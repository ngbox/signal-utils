import {
  Component,
  Injector,
  OnInit,
  Signal,
  inject,
  signal,
} from '@angular/core';
import { pipeSignal } from './pipe-signal';
import { filter } from './filter';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('filter', () => {
  it('emit initial value if predicate returns true', () => {
    TestBed.runInInjectionContext(() => {
      const source = signal<number>(0);
      const filtered = pipeSignal(
        source,
        filter(() => true)
      );
      expect(filtered()).toBe(0);
    });
  });

  it('be undefined if predicate returns false', () => {
    TestBed.runInInjectionContext(() => {
      const source = signal<number>(0);
      const filtered = pipeSignal(
        source,
        filter(() => false)
      );
      expect(filtered()).toBe(undefined);
    });
  });

  describe('work with async updates', () => {
    @Component({
      standalone: true,
      template: '{{filtered()}}',
    })
    class HostComponent {
      readonly source = signal(0);
      readonly filtered = pipeSignal(
        this.source,
        filter((x) => Boolean(x % 2))
      );
    }
    let component: HostComponent;
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(HostComponent);
      component = fixture.componentInstance;
    });

    it('emit only even values', () => {
      component.source.set(0);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toBe('');

      component.source.set(1);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toBe('1');

      component.source.set(2);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toBe('1');

      component.source.set(3);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toBe('3');
    });
  });

  describe('work with the given injector', () => {
    @Component({
      standalone: true,
      template: '{{filtered()}}',
    })
    class HostComponent implements OnInit {
      readonly source = signal(0);
      readonly injector = inject(Injector);
      filtered!: Signal<number | undefined>;

      ngOnInit(): void {
        this.filtered = pipeSignal(
          this.source,
          filter((x) => x > 2, { injector: this.injector })
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
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toBe('');
      component.source.set(5);
      fixture.detectChanges();
      expect(fixture.nativeElement.textContent).toBe('5');
    });
  });
});
