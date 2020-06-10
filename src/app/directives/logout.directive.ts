import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appLogout]',
})
export class LogoutDirective {
  constructor(private authService: AuthService) {}
  @HostListener('click') logout() {
    this.authService
      .logout()
      .then(() => {})
      .catch((err) => {
        console.log('logout failed ==> ', err);
      });
  }
}
