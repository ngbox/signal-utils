import {
  EnvironmentProviders,
  Injectable,
  inject,
  makeEnvironmentProviders,
} from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterStateSnapshot, TitleStrategy } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NxBoxTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);

  override updateTitle(routerState: RouterStateSnapshot): void {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`NgBox Signal Utils | ${title}`);
    }
  }
}

export function provideTitleStrategy(): EnvironmentProviders {
  return makeEnvironmentProviders([
    {
      provide: TitleStrategy,
      useClass: NxBoxTitleStrategy,
    },
  ]);
}
