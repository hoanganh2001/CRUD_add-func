import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatDialogModule} from '@angular/material/dialog';
import { MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule} from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { DialogModule } from '@angular/cdk/dialog';
import { HomeComponent } from './home.component';
import { MatInputModule } from '@angular/material/input';
import { NotificationComponent } from './notification/notification/notification.component';


@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    DialogModule,
    MatInputModule
    ],
  declarations: [HomeComponent, NotificationComponent],
})
export class HomeModule {}
