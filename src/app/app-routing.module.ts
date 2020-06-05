import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomersComponent } from './data-components/customers/customers.component';
import { AddCustomerComponent } from './data-components/customers/add-customer/add-customer.component';
import { ContactsComponent } from './data-components/contacts/contacts.component';
import { ViewCustomerComponent } from './data-components/customers/view-customer/view-customer.component';
import { UpdateCustomerComponent } from './data-components/customers/update-customer/update-customer.component';

const routes: Routes = [
  { path: '', component: CustomersComponent },
  { path: 'customers/add', component: AddCustomerComponent },
  { path: 'customers/:id', component: ViewCustomerComponent },
  { path: 'customers/:id/update', component: UpdateCustomerComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'contacts', component: ContactsComponent },
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
export class AppRoutingModule {}
