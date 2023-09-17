import { InjectionToken, inject } from '@angular/core';

const DOCS_URL = new InjectionToken<string>('DOCS_URL', {
  providedIn: 'root',
  factory(): string {
    return 'https://ngbox.github.io/signal-utils';
  },
});

export function injectDocsURL(): string {
  return inject(DOCS_URL);
}

const REPOSITORY_URL = new InjectionToken<string>('REPOSITORY_URL', {
  providedIn: 'root',
  factory(): string {
    return 'https://github.com/ngbox/signal-utils';
  },
});

export function injectRepositoryURL(): string {
  return inject(REPOSITORY_URL);
}
