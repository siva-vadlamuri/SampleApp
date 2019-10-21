import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent{
  fvalue : number =0;
  svalue : number =0;result : number =0;
  operand : string ="select";
  constructor() { }
process(){
  switch(this.operand){
    case "Addition": this.result=this.fvalue+this.svalue;break;
    case "Substraction": this.result=this.fvalue-this.svalue;break;
    case "Multiplication": this.result=this.fvalue*this.svalue;break;
    case "Division": this.result=this.fvalue/this.svalue;break;
  }
}
testfunc(){
  alert("test 123");
}
}
