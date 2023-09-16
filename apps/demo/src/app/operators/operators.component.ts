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

@Component({
  standalone: true,
  selector: 'app-operators',
  styleUrls: ['./operators.component.scss'],
  template: `
    <div class="container">
      <h1 class="py-4">Operators</h1>
      <ul class="list-group">
        <li class="list-group-item bg-success text-white">
          <span>source</span>
          <span>{{ source() }}</span>
        </li>
        <li class="list-group-item">
          <span>bufferCount (5)</span>
          <span>{{ bufferCount() | json }}</span>
        </li>
        <li class="list-group-item">
          <span>debounce</span>
          <span>{{ debounce() }}</span>
        </li>
        <li class="list-group-item">
          <span>delay</span>
          <span>{{ delay() }}</span>
        </li>
        <li class="list-group-item">
          <span>filter (even only)</span>
          <span>{{ filter() }}</span>
        </li>
        <li class="list-group-item">
          <span>throttle</span>
          <span>{{ throttle() }}</span>
        </li>
        <li class="list-group-item">
          <span>map</span>
          <span>{{ map() }}</span>
        </li>
        <li class="list-group-item">
          <span>chain (even only with 5 secs delay)</span>
          <span>{{ chain() }}</span>
        </li>
      </ul>

      <div class="d-flex gap-4 mt-4 justify-content-end">
        <button class="btn btn-success" (click)="increase()">+ increase</button>
        <button class="btn btn-danger" (click)="decrease()">- decrease</button>
      </div>
    </div>
  `,
  imports: [JsonPipe],
})
export class OperatorsComponent {
  public source = signal(0);
  public bufferCount = pipeSignal(this.source, bufferCount(5));
  public debounce = pipeSignal(this.source, debounceTime(2000));
  public delay = pipeSignal(this.source, delay(2000));
  public throttle = pipeSignal(this.source, throttleTime(2000));
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
