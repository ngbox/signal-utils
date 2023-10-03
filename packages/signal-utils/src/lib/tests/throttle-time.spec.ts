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
import { throttleTime } from '../throttle-time';
import { createSignalPipe } from '../pipe-signal';

@Component({
  standalone: true,
  template: '{{throttled()}}',
})
class HostComponent<T = unknown> implements OnInit {
  @Input() params!: Parameters<typeof throttleTime<T>>;
  private readonly injector = inject(Injector);

  source!: WritableSignal<T>;
  throttled!: Signal<T>;

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      const signalPipe = createSignalPipe();

      this.throttled = signalPipe(this.source, throttleTime(...this.params));
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

  it('ignore all the values when throttling', fakeAsync(() => {
    component.params = [1000];
    component.source = signal(0);
    fixture.detectChanges();

    component.source.set(1);
    component.source.set(2);
    fixture.detectChanges();
    component.source.set(3);
    tick(900);
    fixture.detectChanges();
    component.source.set(5);

    const actual = fixture.nativeElement.textContent;
    const expected = '0';

    expect(actual).toBe(expected);
    flush();
  }));

  it('emit the value when not throttling', fakeAsync(() => {
    component.params = [1000];
    component.source = signal(0);
    fixture.detectChanges();

    component.source.set(10);
    fixture.detectChanges();
    tick(1000); // not throttling anymore.
    component.source.set(15);
    fixture.detectChanges();

    const actual = fixture.nativeElement.textContent;
    const expected = '15';

    expect(actual).toBe(expected);
    flush();
  }));
});
