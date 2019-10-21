import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interest-app',
  templateUrl: './interest-app.component.html',
  styleUrls: ['./interest-app.component.css']
})
export class InterestAppComponent {
principal : number=0;
timeperiod : number=0;
rateofinterest : number=0;result : number=0;
  constructor() { }
process(){
this.result=(this.principal*this.timeperiod*this.rateofinterest)/100;

}
  

}
