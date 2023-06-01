import { Component } from '@angular/core';
import { SignupService } from 'src/app/service/signup.service';

@Component({
  selector: 'app-customer-home-page',
  templateUrl: './customer-home-page.component.html',
  styleUrls: ['./customer-home-page.component.css']
})
export class CustomerHomePageComponent {
  CustomerData: any;
  randomNum = Math.floor(Math.random() * 10);

  constructor(private service: SignupService) { }
  ngOnInit() {
    this.service.getSingleUser(this.randomNum).subscribe({
      next: (data) => {
        console.log(data);
        this.CustomerData = data;
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
