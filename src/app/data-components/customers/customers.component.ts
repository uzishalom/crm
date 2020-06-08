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
  customers: Observable<Customer[]>;

  nameFilter: string;
  emailFilter: string;

  constructor(private customersService: CustomersService) {
    this.customers = customersService.getAll();
  }

  deleteCustomer(customerId: string, customerName: string) {
    let userConfirmedDeletion: boolean = confirm(
      `Are you sure you want to remove ${customerName} from the system ?`
    );

    if (userConfirmedDeletion) {
      this.customersService.remove(customerId).catch((error) => {
        console.log(error);
        alert('There was an error in removing the customer from the system');
      });
    }
  }
}
