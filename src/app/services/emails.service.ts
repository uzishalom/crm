import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';


import { CustomersService } from './customers.service';
import { AuthService } from './auth.service';

import { Email } from '../interfaces/email';
import { Customer } from "../interfaces/customer";
import { environment } from '../../environments/environment'




@Injectable({
  providedIn: 'root'
})
export class EmailsService {

  private emailsCollectionRef: AngularFirestoreCollection<Email> = null;

  constructor(dbRef: AngularFirestore, private customersService: CustomersService, private authService: AuthService, private httpTestClient: HttpClient) {
    this.emailsCollectionRef = dbRef.collection('emails');
  }


  getAll(): Observable<Email[]> {
    return this.emailsCollectionRef.valueChanges({ idField: 'id' }).pipe(map(emails => emails.sort(this.sortEmailsDesc)));
  }

  sendEmail(email: Email, customer: Customer) {
    email.sentBy = this.authService.user.email;
    email.sentOnString = new Date().toUTCString();
    email.sentOnDate = new Date();
    return this.send(email).then(() => this.add(email, customer));
  }


  // ----------------- Private Methods ------------------------------------------

  private send(email: Email): Promise<object> {
    const requestBody = {
      "email": email.to,
      "subject": email.subject,
      "message": email.message
    }

    return this.httpTestClient.post(environment.sendEmailApiUrl, requestBody).toPromise();

  }

  private add(email: Email, customer: Customer) {
    return this.emailsCollectionRef.add(email).then(() => this.addEmailToCustomer(email, customer));
  }

  private addEmailToCustomer(email: Email, customer: Customer) {
    let updatedCustomerReceivedEmails = "receivedEmails" in customer ? { receivedEmails: [email, ...customer.receivedEmails] } : { receivedEmails: [email] };
    return this.customersService.updateCustomerEmails(customer.id, updatedCustomerReceivedEmails);
  }

  private sortEmailsDesc(emailA, emailB) {
    if (emailA.sentOnDate > emailB.sentOnDate)
      return -1;
    if (emailA.sentOnDate < emailB.sentOnDate)
      return 1;
    return 0;
  };

}
