import { Component } from '@angular/core';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css'],
})
export class AddCustomerComponent {
  firstName = '';
  lastName = '';
  email = '';
  phone = '';
  address = '';
  notes = '';
  constructor() {}

  validate() {
    return (
      this.firstName.length >= 4 &&
      this.lastName.length >= 4 &&
      this.email.length > 0 &&
      this.phone.length > 0
    );
  }

  // temp success message
  tempSuccess = '';

  addCustomer(event) {
    event.preventDefault();
    event.stopPropagation();
    if (this.validate()) {
      this.tempSuccess = `*** SUCCESS ${this.firstName} - ${this.lastName} ***`;
    }
  }
}
