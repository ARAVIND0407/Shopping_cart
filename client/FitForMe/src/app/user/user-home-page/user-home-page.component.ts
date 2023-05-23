import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-user-home-page',
  templateUrl: './user-home-page.component.html',
  styleUrls: ['./user-home-page.component.css']
})
export class UserHomePageComponent {
  products?: any[];
  constructor(
    private service:ProductService
  ) { }

  ngOnInit() {
    this.service.getProducts().subscribe({
      next: (response: any) => {
        this.products = response
        console.log(this.products);
        
    }})
  }
}


