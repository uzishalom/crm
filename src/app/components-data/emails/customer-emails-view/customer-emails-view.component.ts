import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Email } from 'src/app/interfaces/email';
import { CustomersService } from 'src/app/services/customers.service';
import { switchMap, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-customer-emails-view',
  templateUrl: './customer-emails-view.component.html',
  styleUrls: ['./customer-emails-view.component.css']
})
export class CustomerEmailsViewComponent implements OnInit {
  emails: Email[];
  customerFullName: string = '';
  subscription: Subscription;


  constructor(
    private route: ActivatedRoute,
    private customersService: CustomersService,
    private location: Location
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

  switchToMessageView(email: Email) {
    if (email.isToShowMessage) {
      email.isToShowMessage = false;
    }
    else {
      email.isToShowMessage = true;
    }
  }

  back() {
    this.location.back();

  }
}
