import { Component } from '@angular/core';
import { sidebarMenuItems } from './sidebar.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  sidebarMenuItems = sidebarMenuItems;
}
