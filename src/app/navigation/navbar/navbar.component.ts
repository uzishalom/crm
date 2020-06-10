import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { LogoutDirective } from '../../directives/logout.directive';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(public authService: AuthService) {}
}
