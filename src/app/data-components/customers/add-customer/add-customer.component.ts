import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent {
  formData: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  errorInSaving = false;

  constructor(
    private customersService: CustomersService,
    private router: Router
  ) {}

  addCustomer(isDataValid: boolean) {
    if (isDataValid) {
      this.errorInSaving = false;
      this.customersService
        .add(this.formData)
        .then(() => this.router.navigateByUrl('/customers'))
        .catch((error) => {
          console.log(error);
          this.errorInSaving = true;
        });
    }
  }

  resetForm(form: NgForm) {
    form.resetForm({
      firstName: '',
      lastName: '',
      email: '',
      phone: '',
      address: '',
      notes: '',
    });
    this.errorInSaving = false;
  }
}
