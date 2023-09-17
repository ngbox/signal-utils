import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  bufferCount,
  debounceTime,
  delay,
  pipeSignal,
  filter,
  map,
  throttleTime,
} from '@ngbox/signal-utils';
import { injectDocsURL } from '../../providers';
import { HrefToDocsDirective } from '../../directives/to-docs.directive';

@Component({
  standalone: true,
  selector: 'app-operators',
  styleUrls: ['./operators.component.scss'],
  templateUrl: './operators.component.html',
  imports: [JsonPipe, HrefToDocsDirective],
})
export default class OperatorsComponent {
  readonly docsURL = injectDocsURL();

  public source = signal(0);
  public bufferCount = pipeSignal(this.source, bufferCount(5));
  public debounceTime = pipeSignal(this.source, debounceTime(2000));
  public delay = pipeSignal(this.source, delay(2000));
  public throttleTime = pipeSignal(this.source, throttleTime(2000));
  public map = pipeSignal(
    this.source,
    map((val) => val + 1000)
  );
  public filter = pipeSignal(
    this.source,
    filter((val) => Boolean(val % 2))
  );
  public chain = pipeSignal(
    this.source,
    filter((val) => Boolean(val % 2)),
    delay(5000)
  );

  public increase(): void {
    this.source.update((s) => s + 1);
  }

  public decrease(): void {
    this.source.update((s) => s - 1);
  }
}
