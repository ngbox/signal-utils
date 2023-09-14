import {
  Component,
  Injector,
  Input,
  OnInit,
  Signal,
  WritableSignal,
  inject,
  runInInjectionContext,
  signal,
} from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { pipeSignal } from './pipe-signal';
import { bufferCount } from './buffer-count';

describe('bufferCount', () => {
  describe('initialize', () => {
    @Component({
      standalone: true,
      template: '{{buffered()}}',
    })
    class HostComponent implements OnInit {
      @Input() bufferSize = 1;

      source!: WritableSignal<number>;
      buffered!: Signal<Array<number>>;
      injector = inject(Injector);

      ngOnInit(): void {
        runInInjectionContext(this.injector, () => {
          this.source = signal(1);
          this.buffered = pipeSignal(this.source, bufferCount(this.bufferSize));
        });
      }
    }
    let component: HostComponent;
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(HostComponent);
      component = fixture.componentInstance;
    });

    it('emit initial value instantly when bufferSize is 1', () => {
      fixture.detectChanges();
      expect(component.buffered()).toEqual([1]);
    });

    it('emit empty array instantly when bufferSize is greater than 1', () => {
      component.bufferSize = 5;
      fixture.detectChanges();
      const setSource = (val: number): void => {
        component.source.set(val);
        fixture.detectChanges();
      };

      setSource(2);
      setSource(3);
      setSource(4);
      setSource(5);

      expect(component.buffered()).toEqual([1, 2, 3, 4, 5]);
    });
  });

  it('work with given injector', () => {
    let injector!: Injector;
    TestBed.runInInjectionContext(() => {
      injector = inject(Injector);
    });
    const source = signal<number>(0);
    const delayed = pipeSignal(source, bufferCount(2, { injector }));
    expect(delayed()).toEqual([]);
  });
});
