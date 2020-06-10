import { Directive, HostListener } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appLoginGoogle]',
})
export class LoginGoogleDirective {
  constructor(private authService: AuthService) {}

  @HostListener('click') googleLogin() {
    this.authService.googleLogin().catch((err) => {
      console.log('failed to log in with google ==>', err);
    });
  }
}
