import {
  Component,
  Injector,
  Input,
  OnInit,
  inject,
  runInInjectionContext,
} from '@angular/core';
import {
  ComponentFixture,
  TestBed,
  discardPeriodicTasks,
  fakeAsync,
  tick,
} from '@angular/core/testing';
import { CreateIntervalResponse, createInterval } from './create-interval';

@Component({
  standalone: true,
  template: '{{response.interval()}}',
})
class HostComponent implements OnInit {
  @Input() params!: Parameters<typeof createInterval>;
  private readonly injector = inject(Injector);
  response!: CreateIntervalResponse;

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      this.response = createInterval(...this.params);
    });
  }
}

describe('createInterval', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
  });

  it('bind initial value', (done) => {
    component.params = [1000, 5];
    fixture.detectChanges();

    const actual = fixture.nativeElement.textContent;
    const expected = '5';

    expect(actual).toBe(expected);
    done();
  });

  it('increase by 1 after a period of time', fakeAsync(() => {
    component.params = [1000, 0];
    fixture.detectChanges();

    tick(1000);
    fixture.detectChanges();

    const actual = fixture.nativeElement.textContent;
    const expected = '1';

    expect(actual).toBe(expected);
    discardPeriodicTasks();
  }));

  it('reset to initial value', fakeAsync(() => {
    component.params = [1000, 51];
    fixture.detectChanges();

    tick(1000);
    fixture.detectChanges();

    component.response.resetInterval();
    fixture.detectChanges();

    const actual = fixture.nativeElement.textContent;
    const expected = '51';

    expect(actual).toBe(expected);
    discardPeriodicTasks();
  }));

  it('work with given injector', (done) => {
    let injector!: Injector;
    TestBed.runInInjectionContext(() => {
      injector = inject(Injector);
    });

    const source = createInterval(1000, 1, { injector });

    const actual = source.interval();
    const expected = 1;

    expect(actual).toBe(expected);

    done();
  });
});
