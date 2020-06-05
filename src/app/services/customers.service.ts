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

  getById(id: string) {
    return this.customersCollectionRef.doc(id).get().toPromise();
  }

  add(customer: Customer) {
    return this.customersCollectionRef.add(customer);
  }

  update(id: string, customer: Customer) {
    return this.customersCollectionRef.doc(id).update(customer);
  }

  remove(id: string) {
    return this.customersCollectionRef.doc(id).delete();
  }
}
