import { Component, EventEmitter, Output } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  @Output() backToLoginClicked = new EventEmitter();

  form = { email: '', password: '' };
  errorInSignup: boolean = false;
  errorMessage: string = '';

  constructor(private authService: AuthService) {}

  signUp(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.errorInSignup = false;
    this.authService
      .createUser(this.form.email, this.form.password)
      .catch((err) => {
        console.log(err);
        this.errorInSignup = true;
        this.errorMessage = err.message;
      });
  }

  onBackToLoginClicked(e: MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    this.backToLoginClicked.emit();
  }
}
