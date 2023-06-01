import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerRoutingModule } from './customer-routing.module';
import { CustomerHomePageComponent } from './customer-home-page/customer-home-page.component';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { ProductsComponent } from '../shared/products/products.component';
import { CartComponent } from './cart/cart.component';


@NgModule({
  declarations: [
    CustomerHomePageComponent,
    CustomerLayoutComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule,
    FooterComponent,
    ProductsComponent
  ]
})
export class CustomerModule { }
