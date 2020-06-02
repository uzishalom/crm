import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customers: Customer[] = [];

  getAllCustomers() {
    return this.customers;
  }

  addCustomer(customer: Customer) {
    console.log(customer);
  }
}
