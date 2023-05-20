import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { LoginComponent } from './login/login.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetpasswordComponent } from './forgetpassword/forgetpassword.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { UserHomePageComponent } from './user-home-page/user-home-page.component';
import { FooterComponent } from '../shared/footer/footer.component';
import { NavbarComponent } from '../shared/navbar/navbar.component';


@NgModule({
  declarations: [
    LoginComponent,
    UserLayoutComponent,
    SignupComponent,
    ForgetpasswordComponent,
    NotfoundComponent,
    UserHomePageComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FooterComponent,
    NavbarComponent
  ]
})
export class UserModule { }
