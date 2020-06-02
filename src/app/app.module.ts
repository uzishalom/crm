import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FirstLetterUperCasePipe } from './pipes/first-letter-uper-case.pipe';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { CustomersComponent } from './data-components/customers/customers.component';
import { MenubarComponent } from './navigation/menubar/menubar.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { AddCustomerComponent } from './data-components/customers/add-customer/add-customer.component';
import { ContactsComponent } from './data-components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstLetterUperCasePipe,
    PageNotFoundComponent,
    ContentHeaderComponent,
    CustomersComponent,
    MenubarComponent,
    NavbarComponent,
    AddCustomerComponent,
    ContactsComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
