import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Email } from 'src/app/interfaces/email';
import { CustomersService } from 'src/app/services/customers.service';
import { switchMap, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-email-view',
  templateUrl: './customer-email-view.component.html',
  styleUrls: ['./customer-email-view.component.css']
})
export class CustomerEmailViewComponent implements OnInit {
  emails: Email[];
  customerFullName: string = '';
  subscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private customersService: CustomersService
  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(
        switchMap((params) => this.customersService.getById(params.id)),
        take(1)
      )
      .subscribe((customer) => {
        this.emails = customer.receivedEmails;
        this.customerFullName = customer.firstName + ' ' + customer.lastName;
      });
  }

  viewEmail() {

  }
}
