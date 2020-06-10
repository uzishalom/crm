import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { switchMap, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-update-customer',
  templateUrl: './update-customer.component.html',
  styleUrls: ['./update-customer.component.css'],
})
export class UpdateCustomerComponent implements OnInit, OnDestroy {
  customer: Customer;
  errorInSaving: boolean = false;
  customerInitialFullName: string = '';
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customersService: CustomersService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(
        switchMap((params) => this.customersService.getById(params.id)),
        take(1)
      )
      .subscribe((customer) => {
        this.customer = customer;
        this.customerInitialFullName =
          this.customer.firstName + ' ' + this.customer.lastName;
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  updateCustomer(isDataValid: boolean) {
    if (isDataValid) {
      this.errorInSaving = false;
      this.customersService
        .update(this.customer.id, this.customer)
        .then(() => this.router.navigate(['/customers', this.customer.id]))
        .catch((error) => {
          console.log(error);
          this.errorInSaving = true;
        });
    }
  }
}
