import { Component, Input, NgModule } from '@angular/core';
import { DialogComponent } from 'src/app/dialog/dialog.component';
import { HomeComponent } from '../home.component';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styles: [
    `
    .noti {
      right: 14px;
      top: 7%;
      border-radius: 4px;
      position: absolute;
      background-color: #fff;
      width: 300px;
      height: 60px;
      box-shadow: 0 5px 35px #a1a1a1;
      z-index: 10000;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 16px;
      font-size: 16px;
      font-weight: 500;
    }
    .noti-hide {
      display: none;
    }
  `,
  ],})
export class NotificationComponent  {

  @Input() isShow !: boolean;
  constructor(){}
  showNoti(){
    if (this.isShow === false ) {
      this.isShow = true;
      console.log(this.isShow);
      setTimeout(()=>{
        this.isShow = false;
      }, 5000)
    } else {
      this.isShow = false;
    }
  }
  ngOnInit() {
    // if(this.dialogContent.act == "add") {
    //   this.showNoti();
    // }
  }
}

