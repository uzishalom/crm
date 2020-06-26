import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { switchMap, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit, OnDestroy {
  customer: Customer;
  customerFullName: string = "";
  errorInSending: boolean = false;
  errorInSaving: boolean = false;
  subscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customersService: CustomersService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(
        switchMap((params) => this.customersService.getById(params.id)),
        take(1)
      )
      .subscribe((customer) => {
        this.customer = customer;
        this.customerFullName =
          this.customer.firstName + ' ' + this.customer.lastName;

      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
