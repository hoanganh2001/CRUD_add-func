import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DialogModule } from './dialog/dialog.module';
import { HomeModule } from './home/home/home.module';




@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DialogModule,
    HomeModule,
  ],
  providers: [AppComponent],
  bootstrap: [AppComponent],
})
export class AppModule { }
