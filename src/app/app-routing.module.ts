import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './components-general/page-not-found/page-not-found.component';
import { CustomersComponent } from './components-data/customers/customers-view/customers.component';
import { AddCustomerComponent } from './components-data/customers/add-customer/add-customer.component';
import { ContactsComponent } from './components-data/contacts/contacts.component';
import { ViewCustomerComponent } from './components-data/customers/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './components-data/customers/update-customer/update-customer.component';
import { SendEmailComponent } from "./components-data/emails/send-email/send-email.component";
import { EmailsViewComponent } from "./components-data/emails/emails-view/emails-view.component";
import { CustomerEmailsViewComponent } from "./components-data/emails/customer-emails-view/customer-emails-view.component";

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'customers/add', component: AddCustomerComponent },
  { path: 'customers/:id', component: ViewCustomerComponent },
  { path: 'customers/:id/update', component: UpdateCustomerComponent },
  { path: 'customers/:id/send-email', component: SendEmailComponent },
  { path: 'customers/:id/sent-emails', component: CustomerEmailsViewComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'emails', component: EmailsViewComponent },
  {
    path: 'page-not-found',
    component: PageNotFoundComponent,
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
