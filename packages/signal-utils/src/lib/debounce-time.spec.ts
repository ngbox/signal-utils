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
import {
  ComponentFixture,
  TestBed,
  fakeAsync,
  flush,
  tick,
} from '@angular/core/testing';
import { debounceTime } from './debounce-time';
import { pipeSignal } from './pipe-signal';

@Component({
  standalone: true,
  template: '{{debounced()}}',
})
class HostComponent<T = unknown> implements OnInit {
  @Input() params!: Parameters<typeof debounceTime<T>>;
  private readonly injector = inject(Injector);

  source!: WritableSignal<T>;
  debounced!: Signal<T>;

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      this.debounced = pipeSignal(this.source, debounceTime(...this.params));
    });
  }
}

describe('debounceTime', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
  });

  it('bind initial value', (done) => {
    component.params = [1000];
    component.source = signal(10);
    fixture.detectChanges();

    const actual = fixture.nativeElement.textContent;
    const expected = '10';

    expect(actual).toBe(expected);
    done();
  });

  it('ignore all the values until the gap for the period of time', fakeAsync(() => {
    component.params = [1000];
    component.source = signal(0);
    fixture.detectChanges();

    component.source.set(1);
    component.source.set(2);
    fixture.detectChanges();
    component.source.set(3);
    tick(500);
    fixture.detectChanges();
    component.source.set(5);

    const actual = fixture.nativeElement.textContent;
    const expected = '0';

    expect(actual).toBe(expected);
    flush();
  }));

  it('emit the value after the gap for the period of time', fakeAsync(() => {
    component.params = [1000];
    component.source = signal(0);
    fixture.detectChanges();

    component.source.set(1);
    fixture.detectChanges();
    tick(500);

    component.source.set(10);
    fixture.detectChanges();
    tick(1000);
    fixture.detectChanges();

    const actual = fixture.nativeElement.textContent;
    const expected = '10';

    expect(actual).toBe(expected);
    flush();
  }));

  it('work with given injector', (done) => {
    let injector!: Injector;
    let source!: WritableSignal<number>;
    TestBed.runInInjectionContext(() => {
      injector = inject(Injector);
      source = signal(10);
    });

    const target = pipeSignal(source, debounceTime(1000, { injector }));

    const actual = target();
    const expected = 10;

    expect(actual).toBe(expected);

    done();
  });
});
