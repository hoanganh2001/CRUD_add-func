import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import {MatDialogModule} from '@angular/material/dialog';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule, MatDateRangePicker} from '@angular/material/datepicker';
import {MatNativeDateModule, MAT_DATE_LOCALE} from '@angular/material/core'
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {  ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';


import { DialogComponent } from './dialog.component';
import { DialogContentComponent } from './dialogContent/dialogContent.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { DialogDetailComponent } from './dialogDetail/dialogDetail.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  imports: [
    CommonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatFormFieldModule,
    MatDialogModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatIconModule,
    MatCardModule,
    MatTableModule
  ],
  declarations: [DialogComponent, DialogContentComponent, DialogDetailComponent],
  exports:[DialogContentComponent],
})
export class DialogModule { }
