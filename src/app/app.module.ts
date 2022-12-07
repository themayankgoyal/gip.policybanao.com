import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';

import { AppComponent } from './app.component';
import { AddPolicyComponent } from './add-policy/add-policy.component';

@NgModule({
  declarations: [
    AppComponent,
    AddPolicyComponent,
  ],

  imports: [
    BrowserModule,
    AccordionModule,
    BrowserAnimationsModule,
    DropdownModule,
    FormsModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
