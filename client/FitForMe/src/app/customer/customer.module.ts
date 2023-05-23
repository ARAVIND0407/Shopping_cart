import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomePageComponent } from './customer-home-page/customer-home-page.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';


@NgModule({
  declarations: [
    CustomerHomePageComponent,
    CustomerLayoutComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerModule { }
