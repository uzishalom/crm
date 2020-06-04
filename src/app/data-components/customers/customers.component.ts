import { Component, OnInit, OnDestroy } from '@angular/core';
import { Customer } from 'src/app/interfaces/customer';
import { CustomersService } from 'src/app/services/customers.service';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css'],
})
export class CustomersComponent implements OnInit, OnDestroy {
  customers: Observable<Customer[]> = new Observable<Customer[]>();
  customersCount: number = 0;
  countSubscription: Subscription;

  constructor(customersService: CustomersService) {
    this.customers = customersService.getAll();
  }

  ngOnInit() {
    this.countSubscription = this.customers.subscribe((data) => {
      this.customersCount = data.length;
    });
  }

  ngOnDestroy() {
    this.countSubscription.unsubscribe();
  }
}
