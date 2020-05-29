import { Component, Input } from '@angular/core';
import {
  MenubarMenuItem,
  MenuDefinitions,
} from '../interfaces/menubarInterfaces';

@Component({
  selector: 'app-mainnavigation',
  templateUrl: './mainnavigation.component.html',
  styleUrls: ['./mainnavigation.component.css'],
})
export class MainnavigationComponent {
  @Input() menuItems: MenubarMenuItem[] = [];
  @Input() menuDefinitions: MenuDefinitions = {};
}
