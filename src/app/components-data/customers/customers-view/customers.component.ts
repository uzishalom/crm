import { Component } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: 'Delete Customer',
      text: `Are you sure you want to remove ${customerName} from the system ?`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then(result => {
      if (result.isConfirmed) {
        this.customersService.remove(customerId).catch((error) => {
          console.log(error);
          Swal.fire(
            'Oops',
            'There was an error in removing the customer from the system',
            'error'
          )
        });
      }
    });

  }
}
