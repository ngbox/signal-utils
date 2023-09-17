import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HrefToDocsDirective } from '../directives/to-docs.directive';
import { injectRepositoryURL } from '../providers';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [RouterLink, RouterLinkActive, HrefToDocsDirective],
})
export class NavbarComponent {
  readonly repositoryURL = injectRepositoryURL();
}
