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
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ContentHeaderComponent } from './content-header/content-header.component';
import { CustomersComponent } from './data-components/customers/customers.component';
import { MenubarComponent } from './navigation/menubar/menubar.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { AddCustomerComponent } from './data-components/customers/add-customer/add-customer.component';
import { ContactsComponent } from './data-components/contacts/contacts.component';
import { ViewCustomerComponent } from './data-components/customers/view-customer/view-customer.component';
import { MapComponent } from './map/map.component';
import { UpdateCustomerComponent } from './data-components/customers/update-customer/update-customer.component';
import { DataFilterPipe } from './pipes/data-filter.pipe';
import { DataFilterTwoFieldsOrPipe } from './pipes/data-filter-two-fields-or.pipe';
import { LoadingComponent } from './loading/loading.component';
import { LoginComponent } from './login/login.component';
import { LoginGoogleDirective } from './directives/loginGoogle.directive';
import { LogoutDirective } from './directives/logout.directive';
import { SignupComponent } from './signup/signup.component';

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
export class AppModule {}
