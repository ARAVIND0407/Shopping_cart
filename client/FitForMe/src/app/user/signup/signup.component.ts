import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  status = false;
  password = "";
  confirmPassword = "";
  display = false;
  form = '';

  userData: signupDto = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    tempPass: ""
  };
  constructor(private router:Router) { }

  savePassword(event: any) {
    this.password = event.target.attributes['ng-reflect-model'].value;
  }

  handlePassword(event: any) {
    this.confirmPassword = event.target.attributes['ng-reflect-model'].value;
    if (this.confirmPassword !== this.password) {
      this.display = true;
    }
    else {
      this.display = false;
    }
  }

  signupUser() {
    this.router.navigate(['/customer/home']);    
  }
}
