import { JsonPipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import {
  bufferCount,
  debounceTime,
  delay,
  filter,
  map,
  throttleTime,
} from '@ngbox/signal-utils';
import { injectDocsURL } from '../../providers';
import { HrefToDocsDirective } from '../../directives/to-docs.directive';
import { createSignalPipe } from '@ngbox/signal-utils';

@Component({
  standalone: true,
  selector: 'app-operators',
  styleUrls: ['./operators.component.scss'],
  templateUrl: './operators.component.html',
  imports: [JsonPipe, HrefToDocsDirective],
})
export default class OperatorsComponent {
  readonly docsURL = injectDocsURL();
  private readonly signalPipe = createSignalPipe();

  public source = signal(0);
  public bufferCount = this.signalPipe(this.source, bufferCount(5));
  public debounceTime = this.signalPipe(this.source, debounceTime(2000));
  public delay = this.signalPipe(this.source, delay(2000));
  public throttleTime = this.signalPipe(this.source, throttleTime(2000));
  public map = this.signalPipe(
    this.source,
    map((val) => val + 1000)
  );
  public filter = this.signalPipe(
    this.source,
    filter((val) => Boolean(val % 2))
  );
  public chain = this.signalPipe(
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
