import { Component, Input } from '@angular/core';

import {
  MenubarMenuItem,
  MenuDefinitions,
} from '../interfaces/menubarInterfaces';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css'],
})
export class MenubarComponent {
  @Input() menuItems: MenubarMenuItem[] = [];
  @Input() menuDefinitions: MenuDefinitions = {};
}
