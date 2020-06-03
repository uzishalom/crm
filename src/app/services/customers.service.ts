import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customersCollectionRef: AngularFirestoreCollection<Customer> = null;

  constructor(dbRef: AngularFirestore) {
    this.customersCollectionRef = dbRef.collection('customers');
  }

  getAll(): Observable<Customer[]> {
    return this.customersCollectionRef.valueChanges({ idField: 'id' });
  }

  add(customer: Customer) {
    return this.customersCollectionRef.add(customer);
  }
}
