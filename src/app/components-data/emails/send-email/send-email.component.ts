import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { switchMap, take } from 'rxjs/operators';
import { Subscription } from 'rxjs';

import { Customer } from 'src/app/interfaces/customer';
import { Email } from 'src/app/interfaces/email';

import { CustomersService } from 'src/app/services/customers.service';
import { EmailsService } from 'src/app/services/emails.service';

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.css']
})
export class SendEmailComponent implements OnInit, OnDestroy {
  email: Email = {
    to: "", subject: "", message: ""
  }
  customer: Customer;
  customerFullName: string;
  errorInSending: boolean = false;
  subscription: Subscription;
  inSendEmailProcess = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private customersService: CustomersService,
    private emailsService: EmailsService,
    private location: Location

  ) { }

  ngOnInit(): void {
    this.subscription = this.route.params
      .pipe(
        switchMap((params) => this.customersService.getById(params.id)),
        take(1)
      )
      .subscribe((customer) => {
        this.customer = customer;
        this.customerFullName = this.customer.firstName + ' ' + this.customer.lastName;
        this.email.to = this.customer.email;
      });
  }

  sendEmail(isDataValid: boolean) {
    if (isDataValid) {
      this.inSendEmailProcess = true;
      this.emailsService.sendEmail(this.email, this.customer)
        .then(() => { this.onSuccessEmailSending(); })
        .catch((err) => {
          this.inSendEmailProcess = false;
          console.log(err);
          this.errorInSending = true;
        });
    }
  }

  onSuccessEmailSending() {
    this.inSendEmailProcess = false;
    this.location.back();
    alert("Email was sent successfully");
  }

  onCancelSending() {
    this.location.back();
  }


  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
