import { provideHttpClient } from '@angular/common/http';
import { ApplicationConfig } from '@angular/core';
import { Routes, provideRouter } from '@angular/router';
import { provideTitleStrategy } from './title-strategy';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/operators',
  },
  {
    path: 'operators',
    loadComponent: () => import('./examples/operators/operators.component'),
    title: 'Operators',
  },
  {
    path: 'fromAsync',
    loadComponent: () => import('./examples/todos/todos.component'),
    title: 'fromAsync',
  },
];

export const appConfig: ApplicationConfig = {
  providers: [
    provideHttpClient(),
    provideRouter(routes),
    provideTitleStrategy(),
  ],
};
