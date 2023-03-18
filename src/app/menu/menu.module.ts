import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MenubarModule} from 'primeng/menubar';
// import { InputTextModule } from 'primeng/inputtext';
// import { ButtonModule } from 'primeng/button';
import { MenuComponent } from './menu/menu.component';
import {TieredMenuModule} from 'primeng/tieredmenu';


@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MenubarModule,
    // InputTextModule,
    // ButtonModule,
    TieredMenuModule,
  

  ],
  exports: [
    MenuComponent
  ],
  schemas:[ CUSTOM_ELEMENTS_SCHEMA ]
})
export class MenuModule { }
