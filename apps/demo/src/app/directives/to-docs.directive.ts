import { Directive, HostBinding, Input } from '@angular/core';
import { injectDocsURL } from '../providers';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: 'a[hrefToDocs]',
  standalone: true,
})
export class HrefToDocsDirective {
  readonly docsURL = injectDocsURL();

  @HostBinding('href')
  private fullUrl?: string;

  @Input({ required: true }) set hrefToDocs(href: string) {
    this.fullUrl = `${this.docsURL}/${href}`;
  }

  @HostBinding('target') readonly target = '_blank';
}
