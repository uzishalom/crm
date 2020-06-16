import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { MenuDefinitions } from '../interfaces/menubarInterfaces';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Input() menuDefinitions: MenuDefinitions = {};
  constructor(public authService: AuthService) { }
}
