import { Component, effect, inject } from '@angular/core';
import { Todo, TodoService } from './todo.service';
import { JsonPipe, NgClass, NgFor, NgIf } from '@angular/common';
import { fromAsync } from '@ngbox/signal-utils';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss'],
  standalone: true,
  imports: [NgFor, NgIf, JsonPipe, NgClass],
})
export class TodosComponent {
  private obs$ = inject(TodoService).getTodos();
  query = fromAsync(this.obs$, { initialValue: [] });

  constructor() {
    effect(() => {
      const error = this.query.error();
      if (error) {
        // do something with error
      }
    });
  }

  public refresh(): void {
    this.query.refresh();
  }

  public toggleCompleted(id: Todo['id']): void {
    this.query.data.mutate((arr: Todo[]) => {
      const item = arr.find((x: Todo) => x.id === id);
      if (!item) return;
      item.completed = !item.completed;
    });
  }
}
