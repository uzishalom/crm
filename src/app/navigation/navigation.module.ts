import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MainnavigationComponent } from './mainnavigation/mainnavigation.component';

const exporting = [MainnavigationComponent];

@NgModule({
  declarations: [...exporting, NavbarComponent, SidebarComponent],
  exports: exporting,
  imports: [CommonModule],
})
export class NavigationModule {}
