import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DropdownModule} from 'primeng/dropdown';
import {AccordionModule} from 'primeng/accordion';
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';

import { AddPolicyModule } from '../add-policy/add-policy.module';
import { MenuModule } from '../menu/menu.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    DropdownModule,
    AccordionModule,
    FormsModule,
    AddPolicyModule,
    MenuModule
  ],
  exports: [
    DashboardComponent
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
