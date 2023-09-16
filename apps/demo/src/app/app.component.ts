import { Component } from '@angular/core';
import { TodosComponent } from './todos/todos.component';
import { OperatorsComponent } from './operators/operators.component';

@Component({
  standalone: true,
  imports: [TodosComponent, OperatorsComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {}
