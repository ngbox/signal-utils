import {
  Component,
  Injector,
  OnInit,
  Signal,
  inject,
  signal,
} from '@angular/core';
import { createSignalPipe } from '../pipe-signal';
import { filter } from '../filter';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('filter', () => {
  it('emit initial value if predicate returns true', () => {
    TestBed.runInInjectionContext(() => {
      const source = signal<number>(0);
      const signalPipe = createSignalPipe();
      const filtered = signalPipe(
        source,
        filter(() => true)
      );

      const expected = 0;
      const actual = filtered();

      expect(actual).toBe(expected);
    });
  });

  it('be undefined if predicate returns false', () => {
    TestBed.runInInjectionContext(() => {
      const source = signal<number>(0);
      const signalPipe = createSignalPipe();
      const filtered = signalPipe(
        source,
        filter(() => false)
      );

      const actual = filtered();
      const expected = undefined;

      expect(actual).toBe(expected);
    });
  });

  describe('work with async updates', () => {
    @Component({
      standalone: true,
      template: '{{filtered()}}',
    })
    class HostComponent {
      readonly source = signal(0);
      readonly signalPipe = createSignalPipe();
      readonly filtered = this.signalPipe(
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

    test.each([
      [[1, 2], 1],
      [[1, 2, 3], 3],
      [[1, 2, 3, 4, 5], 5],
    ])('emit only even values', (values, expected) => {
      values.forEach((val) => {
        component.source.set(val);
        fixture.detectChanges();
      });

      const actual = fixture.nativeElement.textContent;

      expect(actual).toBe(expected.toString());
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
        const signalPipe = createSignalPipe(this.injector);
        this.filtered = signalPipe(
          this.source,
          filter((x) => x > 2)
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

      const actual = fixture.nativeElement.textContent;
      const expected = '5';

      expect(actual).toBe(expected);
    });
  });
});
