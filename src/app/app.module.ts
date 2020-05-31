import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstLetterUperCasePipe } from './pipes/first-letter-uper-case.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { CustomersComponent } from './data-components/customers/customers.component';
import { MenubarComponent } from './navigation/menubar/menubar.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstLetterUperCasePipe,
    PageNotFoundComponent,
    ContentHeaderComponent,
    CustomersComponent,
    MenubarComponent,
    NavbarComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
