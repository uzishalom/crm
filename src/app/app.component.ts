import { Component } from '@angular/core';
import { menuItems, menuDefinitions } from './menubar.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuItems = menuItems;
  menuDefinitions = menuDefinitions;
}
