import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {} from '../directives/loginGoogle.directive';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  form = { email: '', password: '' };
  errorInLogin: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  emailAndPasswordLogin(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.errorInLogin = false;
    this.authService
      .emailPasswordLogin(this.form.email, this.form.password)
      .then((user) => {
        console.log('dddddd');
      })
      .catch((err) => {
        console.log(err);
        this.errorInLogin = true;
        this.errorMessage = err.message;
      });
  }
}
