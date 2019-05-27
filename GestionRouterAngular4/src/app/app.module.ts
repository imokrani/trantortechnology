import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http'; 
import { RouterModule, Routes } from '@angular/router';  

import { AppComponent } from './app.component';
import { Comp1Component } from  './comp-1/comp-1.component';
import { Comp2Component } from './comp-2/comp-2.component'; 
import { ROUTES } from './app.routes'; 


@NgModule({
  declarations: [
    AppComponent,
    Comp1Component, 
    Comp2Component
  ],
  imports: [
    BrowserModule,
    FormsModule, 
    HttpModule, 
    RouterModule.forRoot(ROUTES)  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
