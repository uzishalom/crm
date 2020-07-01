import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AgmCoreModule } from '@agm/core';
import { HttpClientModule } from '@angular/common/http';

import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirstLetterUperCasePipe } from './pipes/first-letter-uper-case.pipe';
import { PageNotFoundComponent } from './components-general/page-not-found/page-not-found.component';
import { ContentHeaderComponent } from './components-utils/content-header/content-header.component';
import { CustomersComponent } from './components-data/customers/customers-view/customers.component';
import { MenubarComponent } from './navigation/menubar/menubar.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { AddCustomerComponent } from './components-data/customers/add-customer/add-customer.component';
import { ContactsComponent } from './components-data/contacts/contacts.component';
import { ViewCustomerComponent } from './components-data/customers/view-customer/view-customer.component';
import { MapComponent } from './components-utils/map/map.component';
import { UpdateCustomerComponent } from './components-data/customers/update-customer/update-customer.component';
import { DataFilterPipe } from './pipes/data-filter.pipe';
import { DataFilterTwoFieldsOrPipe } from './pipes/data-filter-two-fields-or.pipe';
import { LoadingComponent } from './components-utils/loading/loading.component';
import { LoginComponent } from './components-general/login/login.component';
import { LoginGoogleDirective } from './directives/loginGoogle.directive';
import { LogoutDirective } from './directives/logout.directive';
import { SignupComponent } from './components-general/signup/signup.component';
import { UnloggedUserNavigatorComponent } from './components-general/unlogged-user-navigator/unlogged-user-navigator.component';
import { SendEmailComponent } from './components-data/emails/send-email/send-email.component';
import { EmailsViewComponent } from './components-data/emails/emails-view/emails-view.component';
import { CustomerEmailViewComponent } from './components-data/emails/customer-email-view/customer-email-view.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstLetterUperCasePipe,
    PageNotFoundComponent,
    ContentHeaderComponent,
    CustomersComponent,
    MenubarComponent,
    NavbarComponent,
    AddCustomerComponent,
    ContactsComponent,
    ViewCustomerComponent,
    MapComponent,
    UpdateCustomerComponent,
    DataFilterPipe,
    DataFilterTwoFieldsOrPipe,
    LoadingComponent,
    LoginComponent,
    LoginGoogleDirective,
    LogoutDirective,
    SignupComponent,
    UnloggedUserNavigatorComponent,
    SendEmailComponent,
    EmailsViewComponent,
    CustomerEmailViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsApiKey,
      libraries: ['places'],
    }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
