import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';

@Component({
  selector: 'app-view-customer',
  templateUrl: './view-customer.component.html',
  styleUrls: ['./view-customer.component.css'],
})
export class ViewCustomerComponent implements OnInit, OnDestroy {
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

  constructor(
    private route: ActivatedRoute,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe((params) => {
      this.customerId = params?.id;
      this.customersService
        .getById(this.customerId)
        .then((doc) => {
          if (doc.exists) {
            this.customer = doc.data() as Customer;
          } else {
            console.log('Customer Not Found');
          }
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
