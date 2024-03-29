import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPolicyComponent } from './add-policy.component';
import {StepsModule} from 'primeng/steps';

import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {CalendarModule} from 'primeng/calendar';
import {InputTextModule} from 'primeng/inputtext';

@NgModule({
  declarations: [
    AddPolicyComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    AccordionModule,
    FormsModule,
    ButtonModule,
    StepsModule,
    TableModule,
    ReactiveFormsModule,
    CalendarModule,
    InputTextModule
  ],
  exports: [
    AddPolicyComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AddPolicyModule { }
