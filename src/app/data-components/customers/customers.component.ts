import { Component } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent {
  customers: Observable<Customer[]> = new Observable<Customer[]>();
  customersCount: number = 0;

  constructor(customersService: CustomersService) {
    this.customers = customersService.getAll();
    this.customers.subscribe((data) => {
      this.customersCount = data.length;
    });
  }
}
