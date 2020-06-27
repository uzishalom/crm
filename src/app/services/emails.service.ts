import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { CustomersService } from './customers.service';
import { AuthService } from './auth.service';

import { Email } from '../interfaces/email';
import { Customer } from "../interfaces/customer";


@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  private emailsCollectionRef: AngularFirestoreCollection<Email> = null;

  constructor(dbRef: AngularFirestore, private customersService: CustomersService, private authService: AuthService) {
    this.emailsCollectionRef = dbRef.collection('emails');
  }

  getAll(): Observable<Email[]> {
    return this.emailsCollectionRef.valueChanges({ idField: 'id' });
  }

  sendEmail(email: Email, customer: Customer) {
    email.sentBy = this.authService.user.email;
    email.sentOn = new Date();
    return this.send(email).then(() => this.add(email, customer));
  }


  // ----------------- Private Methods ------------------------------------------

  private send(eamil): Promise<void> {

    return Promise.resolve();

  }

  private add(email: Email, customer: Customer) {
    return this.emailsCollectionRef.add(email).then(() => this.addEmailToCustomer(email, customer));
  }

  private addEmailToCustomer(email: Email, customer: Customer) {
    let updatedCustomerReceivedEmails = "receivedEmails" in customer ? { receivedEmails: [email, ...customer.receivedEmails] } : { receivedEmails: [email] };
    return this.customersService.updateCustomerEmails(customer.id, updatedCustomerReceivedEmails);
  }
}
