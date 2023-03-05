import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddPolicyComponent } from './add-policy.component';

import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import { FormsModule } from '@angular/forms';
import {ButtonModule} from 'primeng/button';

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
  ],
  exports: [
    AddPolicyComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class AddPolicyModule { }
