import { Component, Inject, inject } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-dialog',
  template: `
  <h1 mat-dialog-title>ADD PRODUCT FORM</h1>
  <app-dialogContent></app-dialogContent>
  `,
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  constructor (){}

}
