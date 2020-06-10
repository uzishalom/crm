import { Component } from '@angular/core';

import { menuItems, menuDefinitions } from './menubar.config';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuItems = menuItems;
  menuDefinitions = menuDefinitions;

  constructor(public afa: AuthService) {}
}
