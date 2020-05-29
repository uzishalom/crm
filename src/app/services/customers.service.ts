import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';

@Injectable({
  providedIn: 'root',
})
export class CustomersService {
  private customers: Customer[] = [
    {
      id: '5eccd89d7365de94964a2513',
      name: 'Susan Whitfield',
      email: 'susanwhitfield@quizka.com',
      birthday: new Date('2019-05-10T01:21:03'),
      phones: ['+1 (847) 465-2554'],
    },
    {
      id: '5eccd89da04a5ee2f0cb748e',
      name: 'Debora Eaton',
      email: 'deboraeaton@quizka.com',
      birthday: new Date('2016-02-03T10:50:41'),
      phones: [],
    },
    {
      id: '5eccd89d750a5e435143f38a',
      name: 'Reva Arnold',
      email: 'revaarnold@quizka.com',
      birthday: new Date('2015-03-13T07:56:02'),
      phones: ['+1 (919) 573-3781'],
    },
    {
      id: '5eccd89d49963d58c4c5f2e9',
      name: 'Aurelia Greene',
      email: 'aureliagreene@quizka.com',
      birthday: new Date('2014-12-17T04:26:45'),
      phones: [],
    },
    {
      id: '5eccd89dc4966be4d0dcae6b',
      name: 'Cantrell Baxter',
      email: 'cantrellbaxter@quizka.com',
      birthday: new Date('2016-07-09T02:02:25'),
      phones: [],
    },
    {
      id: '5eccd89ddf619248e41acc2a',
      name: 'Strong Warren',
      email: 'strongwarren@quizka.com',
      birthday: new Date('2017-10-23T10:53:09'),
      phones: ['+1 (933) 506-3744'],
    },
    {
      id: '5eccd89de0e902312b2a91c9',
      name: 'Elsie Hampton',
      email: 'elsiehampton@quizka.com',
      phones: ['+1 (861) 427-2833', '+1 (946) 462-2075'],
    },
    {
      id: '5eccd89dd716ba13a85c9b91',
      name: 'Calhoun Douglas',
      email: 'calhoundouglas@quizka.com',
      birthday: new Date('2017-05-09T05:43:40'),
      phones: [],
    },
    {
      id: '5eccd89d189a51988f15047d',
      name: 'Tammi Houston',
      email: 'tammihouston@quizka.com',
      birthday: new Date('2016-03-31T01:49:21'),
      phones: ['+1 (870) 576-2625', '+1 (844) 439-3501'],
    },
    {
      id: '5eccd89de030b523ec3fa374',
      name: 'Barnett Pugh',
      email: 'barnettpugh@quizka.com',
      birthday: new Date('2015-01-31T03:35:42'),
    },
    {
      id: '5eccd89de030b523ec3fa374',
      name: 'Barnett Pugh',
      email: 'barnettpugh@quizka.com',
      birthday: new Date('2015-01-31T03:35:42'),
    },
    {
      id: '5eccd89de030b523ec3fa374',
      name: 'Barnett Pugh',
      email: 'barnettpugh@quizka.com',
      birthday: new Date('2015-01-31T03:35:42'),
    },
    {
      id: '5eccd89de030b523ec3fa374',
      name: 'Barnett Pugh',
      email: 'barnettpugh@quizka.com',
      birthday: new Date('2015-01-31T03:35:42'),
    },
    {
      id: '5eccd89de030b523ec3fa374',
      name: 'Barnett Pugh',
      email: 'barnettpugh@quizka.com',
      birthday: new Date('2015-01-31T03:35:42'),
    },
    {
      id: '5eccd89de030b523ec3fa374',
      name: 'Barnett Pugh',
      email: 'barnettpugh@quizka.com',
      birthday: new Date('2015-01-31T03:35:42'),
    },
  ];

  getAllCustomers() {
    return this.customers;
  }
}
