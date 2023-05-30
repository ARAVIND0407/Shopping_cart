import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/service/signup.service';
import { UserViewService } from 'src/app/service/user-view.service';

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
  btnClicked = false;

  userData: signupDto = {
    fName: "",
    lName: "",
    email: "",
    password: "",
    tempPass: ""
  };
  constructor(
    private router: Router,
    private service: SignupService,
    private servicetest: UserViewService
  ) { }

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
    this.service.signupUser(this.userData).subscribe({
      next: (data) => {
        localStorage.setItem("userId", data.email.toString());
      },
      error: (err)=>{
        console.error(err);
      }
    });
    this.router.navigate(['/customer/home']);   
    this.servicetest.getAllUsers().subscribe({
      next: (data) => {
        console.log(data);      
      }
    })
  }

  btnClick() {
    this.btnClicked = true;
    setTimeout(() => {
    this.btnClicked = false;
    }, 2000);
  }


}
