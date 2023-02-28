import { Component, Inject, inject, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DialogContentComponent } from './dialogContent/dialogContent.component';

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
  ngOnInit(){
  }

}
