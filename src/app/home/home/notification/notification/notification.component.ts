import { style } from '@angular/animations';
import { NgStyle } from '@angular/common';
import { Component, Input } from '@angular/core';

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
  `,
  ],})
export class NotificationComponent  {

  @Input() show!: String ;
  constructor(){}
  showNoti(){
    console.log(111)
    if (this.show == 'none') {
      console.log(111)
      this.show = 'block';
    } else {
      this.show = 'none';
    }
  }
  ngOnInit(){}
}

