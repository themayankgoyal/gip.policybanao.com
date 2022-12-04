import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DropdownModule} from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { DropdownFilterOptions } from 'primeng/dropdown';
@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
    DropdownFilterOptions
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
