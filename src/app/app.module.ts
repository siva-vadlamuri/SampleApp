import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CalcComponent } from './Components/calc/calc.component';
import { InterestAppComponent } from './Components/interest-app/interest-app.component';
import { SimpleinterestComponent } from './simpleinterest/simpleinterest.component';

@NgModule({
  declarations: [
    AppComponent,
    CalcComponent,
    InterestAppComponent,
    SimpleinterestComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
