import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mainnavigation',
  templateUrl: './mainnavigation.component.html',
  styleUrls: ['./mainnavigation.component.css'],
})
export class MainnavigationComponent {
  @Input() sidebarMenuItems = [];
}
