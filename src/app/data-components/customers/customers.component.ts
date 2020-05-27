import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  customers: Customer[] = [];

  constructor(customersService: CustomersService) {
    this.customers = customersService.getAllCustomers();
  }
}