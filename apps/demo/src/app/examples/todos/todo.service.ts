import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, delay } from 'rxjs';

export interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly http = inject(HttpClient);

  public getTodos(): Observable<Todo[]> {
    const params = new HttpParams().set('_limit', 20);

    return this.http
      .get<Todo[]>('https://jsonplaceholder.typicode.com/todos', { params })
      .pipe(delay(2000));
  }
}
