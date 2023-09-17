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
