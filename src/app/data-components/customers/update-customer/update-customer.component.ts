import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent implements OnInit, OnDestroy {
  subscription: Subscription;

  customerId: string;
  customer: Customer = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
  };

  errorInSaving: boolean = false;

  customerInitialFullName: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.customerId = params?.id;
      this.customersService
        .getByIdOLD(this.customerId)
        .then((doc) => {
          if (doc.exists) {
            this.customer = doc.data() as Customer;
            this.customerInitialFullName = `${this.customer.firstName} ${this.customer.lastName}`;
          } else {
            console.log('Customer Not Found');
            this.router.navigateByUrl('/page-not-found');
          }
        })
        .catch((error) => {
          console.log(error);
          this.router.navigateByUrl('/page-not-found');
        });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateCustomer(isDataValid: boolean) {
    if (isDataValid) {
      this.errorInSaving = false;
      this.customersService
        .update(this.customerId, this.customer)
        .then(() => this.router.navigate(['/customers', this.customerId]))
        .catch((error) => {
          console.log(error);
          this.errorInSaving = true;
        });
    }
  }
}
