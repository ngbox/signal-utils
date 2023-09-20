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

describe('bufferCount', () => {
  describe('initialize', () => {
    let component: HostComponent;
    let fixture: ComponentFixture<HostComponent>;

    beforeEach(() => {
      fixture = TestBed.createComponent(HostComponent);
      component = fixture.componentInstance;
    });

    it('emit initial value instantly when bufferSize is 1', () => {
      fixture.detectChanges();

      const expected = [1];
      const actual = component.buffered();

      expect(expected).toEqual(actual);
    });

    it('emit empty array instantly when bufferSize is greater than 1', () => {
      const setSource = (val: number): void => {
        component.source.set(val);
        fixture.detectChanges();
      };

      component.bufferSize = 5;
      fixture.detectChanges();

      setSource(2);
      setSource(3);
      setSource(4);
      setSource(5);

      fixture.detectChanges();

      const expected = [1, 2, 3, 4, 5];
      const actual = component.buffered();

      expect(expected).toEqual(actual);
    });
  });

  it('work with given injector', () => {
    let injector!: Injector;
    TestBed.runInInjectionContext(() => {
      injector = inject(Injector);
    });

    const source = signal<number>(0);
    const delayed = pipeSignal(source, bufferCount(2, { injector }));

    const expected: Array<number> = [];
    const actual = delayed();

    expect(expected).toEqual(actual);
  });
});
