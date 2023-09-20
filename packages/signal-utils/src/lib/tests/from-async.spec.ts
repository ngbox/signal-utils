import {
  Component,
  Injector,
  Input,
  OnInit,
  inject,
  runInInjectionContext,
} from '@angular/core';
import { Subject } from 'rxjs';
import { FromAsyncResponse, fromAsync } from '../from-async';
import { ComponentFixture, TestBed } from '@angular/core/testing';

@Component({
  standalone: true,
  template: ` <span></span> `,
})
class HostComponent implements OnInit {
  @Input() initialValue = 0;

  query!: FromAsyncResponse<number, unknown>;

  private readonly subject$ = new Subject<number>();

  injector = inject(Injector);

  ngOnInit(): void {
    runInInjectionContext(this.injector, () => {
      this.query = fromAsync(this.subject$.asObservable(), {
        initialValue: this.initialValue,
      });
    });
  }

  next(val: number): void {
    this.subject$.next(val);
  }

  error(error: unknown): void {
    this.subject$.error(error);
  }
}

describe('fromAsync', () => {
  let component: HostComponent;
  let fixture: ComponentFixture<HostComponent>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HostComponent);
    component = fixture.componentInstance;
  });

  it('bind initial value', () => {
    component.initialValue = 5;
    fixture.detectChanges();

    const expected = 5;
    const actual = component.query.data();

    expect(expected).toBe(actual);
  });

  it('initially mark loading as true', () => {
    fixture.detectChanges();

    const expected = true;
    const actual = component.query.loading();

    expect(expected).toBe(actual);
  });

  it('set response to the data signal', () => {
    fixture.detectChanges();
    component.next(101);
    fixture.detectChanges();

    const expected = 101;
    const actual = component.query.data();

    expect(expected).toBe(actual);
  });

  it('set mark loading as false when loaded', () => {
    fixture.detectChanges();
    component.next(101);
    fixture.detectChanges();

    const expected = false;
    const actual = component.query.loading();

    expect(expected).toBe(actual);
  });

  it('set mark loading as false in case of an error', () => {
    fixture.detectChanges();
    component.error({});
    fixture.detectChanges();

    const expected = false;
    const actual = component.query.loading();

    expect(expected).toBe(actual);
  });

  it('error should be null on success', () => {
    fixture.detectChanges();
    component.next(101);
    fixture.detectChanges();

    const expected = null;
    const actual = component.query.error();

    expect(expected).toBe(actual);
  });

  it('pass over error object on failure', () => {
    fixture.detectChanges();
    component.error({ code: 101 });
    fixture.detectChanges();

    const expected = { code: 101 };
    const actual = component.query.error();

    expect(expected).toEqual(actual);
  });

  it('start fetching on refresh', () => {
    component.next(100);
    fixture.detectChanges();
    component.query.refresh();
    fixture.detectChanges();

    const expected = true;
    const actual = component.query.loading();

    expect(expected).toEqual(actual);
  });

  it('set new data after refresh', () => {
    component.next(100);
    fixture.detectChanges();
    component.query.refresh();
    component.next(200);
    fixture.detectChanges();

    const expected = 200;
    const actual = component.query.data();

    expect(expected).toEqual(actual);
  });
});
