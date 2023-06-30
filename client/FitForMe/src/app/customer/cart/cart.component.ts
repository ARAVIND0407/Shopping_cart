import { Component } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  quantity: number = 1;
  defaultPrice: number = 100;
  price: number = 100;
  constructor(private service: ProductService) { }
  inc() {
    this.quantity += 1;
    this.price += this.defaultPrice;
  }
  dec() {
    if (this.quantity != 0) {
      this.quantity -= 1;
      this.price -= this.defaultPrice;
    }
  }
  showProduct() {
    this.service.getSingleProduct(1).subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      }
    })
  }
}
