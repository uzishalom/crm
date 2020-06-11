import { Component } from '@angular/core';

@Component({
  selector: 'app-unlogged-user-navigator',
  templateUrl: './unlogged-user-navigator.component.html',
  styleUrls: ['./unlogged-user-navigator.component.css'],
})
export class UnloggedUserNavigatorComponent {
  currentShownComponent: string = 'login'; // login, signup

  constructor() {}

  onSignupClicked() {
    this.currentShownComponent = 'signup';
  }

  onBackToLoginClicked() {
    this.currentShownComponent = 'login';
  }
}
