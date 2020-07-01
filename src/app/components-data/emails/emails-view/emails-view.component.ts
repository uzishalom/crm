import { Component } from '@angular/core';
import { Email } from 'src/app/interfaces/email';
import { EmailsService } from 'src/app/services/emails.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-emails-view',
  templateUrl: './emails-view.component.html',
  styleUrls: ['./emails-view.component.css']
})
export class EmailsViewComponent {
  emails: Observable<Email[]>;

  nameFilter: string;
  emailFilter: string;

  constructor(private emailsService: EmailsService) {
    this.emails = emailsService.getAll();
  }

  switchToMessageView(email: Email) {
    if (email.isToShowMessage) {
      email.isToShowMessage = false;
    }
    else {
      email.isToShowMessage = true;
    }


  }

}
