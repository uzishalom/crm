import { Component } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent {
  formData = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };
  constructor() {}

  validate() {
    return true;
  }

  // temp success message
  tempSuccess = '';

  addCustomer(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.validate()) {
      this.tempSuccess = `*** SUCCESS ${this.formData.firstName} - ${this.formData.lastName} ***`;
    }
  }
}
