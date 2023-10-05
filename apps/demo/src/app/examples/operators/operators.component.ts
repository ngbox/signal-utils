import { JsonPipe } from '@angular/common';
import {
  Component,
  Injector,
  Signal,
  WritableSignal,
  effect,
  inject,
  signal,
} from '@angular/core';
import {
  SignalOperatorFunction,
  bufferCount,
  debounceTime,
  delay,
  filter,
  map,
  throttleTime,
} from '@ngbox/signal-utils';
import { injectDocsURL } from '../../providers';
import { HrefToDocsDirective } from '../../directives/to-docs.directive';
import { signalPipe } from '@ngbox/signal-utils';

export function myFilter<T>(
  predicate: (value: T) => boolean
): SignalOperatorFunction<T, T | null> {
  return (source: Signal<T>): Signal<T | null> => {
    console.log(inject(Injector));
    const value = predicate(source()) ? source() : null;
    const filteredSignal: WritableSignal<T | null> = signal(value);

    effect(
      () => {
        const sourceValue = source();
        predicate(sourceValue) && filteredSignal.set(sourceValue);
      },
      { allowSignalWrites: true }
    );

    return filteredSignal.asReadonly();
  };
}

@Component({
  standalone: true,
  selector: 'app-operators',
  styleUrls: ['./operators.component.scss'],
  templateUrl: './operators.component.html',
  imports: [JsonPipe, HrefToDocsDirective],
})
export default class OperatorsComponent {
  readonly docsURL = injectDocsURL();
  private injector = inject(Injector);

  public source = signal(0);
  public bufferCount = signalPipe(this.source, bufferCount(5));
  public debounceTime = signalPipe(this.source, debounceTime(2000));
  public delay = signalPipe(this.source, delay(2000));
  public throttleTime = signalPipe(this.source, throttleTime(2000));
  public map = signalPipe(
    this.source,
    map((val) => val + 1000)
  );
  public filter = signalPipe(
    this.source,
    filter((val) => Boolean(val % 2))
  );
  public chain!: Signal<number | null>;

  public increase(): void {
    this.source.update((s) => s + 1);
  }

  public decrease(): void {
    this.source.update((s) => s - 1);
  }
}
