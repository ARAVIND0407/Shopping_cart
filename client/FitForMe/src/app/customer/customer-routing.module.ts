import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerLayoutComponent } from './customer-layout/customer-layout.component';
import { CustomerHomePageComponent } from './customer-home-page/customer-home-page.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [{
  path: '', component: CustomerLayoutComponent, children: [
    { path: 'home', component: CustomerHomePageComponent },
    { path: 'cart', component: CartComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
