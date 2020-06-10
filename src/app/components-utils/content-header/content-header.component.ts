import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-header',
  templateUrl: './content-header.component.html',
  styleUrls: ['./content-header.component.css'],
})
export class ContentHeaderComponent {
  @Input('icon') iconClass;
  @Input('title') pageTitle;

  constructor() {}
}
