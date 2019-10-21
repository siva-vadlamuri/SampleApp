import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simpleinterest',
  templateUrl: './simpleinterest.component.html',
  styleUrls: ['./simpleinterest.component.css']
})
export class SimpleinterestComponent {

  principal:number=0;
  rate:number=0;
  time:number=0;
  result:number=0;

  constructor() { }

  process(){
this.result=this.principal*this.rate*this.time/100;
  } 
  
}


