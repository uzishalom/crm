import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MenubarComponent } from './menubar/menubar.component';
import { MainnavigationComponent } from './mainnavigation/mainnavigation.component';
import { AppRoutingModule } from '../app-routing.module';

const exporting = [MainnavigationComponent];

@NgModule({
  declarations: [...exporting, NavbarComponent, MenubarComponent],
  exports: exporting,
  imports: [CommonModule, AppRoutingModule],
})
export class NavigationModule {}
