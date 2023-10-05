import {
  Component,
  Injector,
  OnInit,
  Signal,
  inject,
  signal,
} from '@angular/core';
import { createSignalPipe, signalPipe } from '../pipe-signal';
import { map } from '../map';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('map', () => {
  it('set initial value of source to the new signal', () => {
    TestBed.runInInjectionContext(() => {
      const source = signal<number>(0);
      const mapped = signalPipe(
        source,
        map((val) => val + 1)
      );

      const expected = 1;
      const actual = mapped();

      expect(actual).toBe(expected);
    });
  });

  describe('work with async updates', () => {
    @Component({
      standalone: true,
      template: '{{mapped()}}',
    })
    class HostComponent {
      readonly source = signal(0);
      readonly mapped = signalPipe(
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

      const actual = fixture.nativeElement.textContent;
      const expected = '10';

      expect(actual).toBe(expected);
    });
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
        const signalPipe = createSignalPipe(this.injector);
        this.mapped = signalPipe(
          this.source,
          map((x) => x * 4)
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
      const expected = '20';

      expect(actual).toBe(expected);
    });
  });
});
