import { Component, Input } from '@angular/core';

interface SidebarMenuItem {
  title: string;
  icon?: string;
  link: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  @Input('sidebarMenuItems') menuItems: Array<SidebarMenuItem> = [];
}
