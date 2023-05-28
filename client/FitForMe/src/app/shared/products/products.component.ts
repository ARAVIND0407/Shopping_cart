import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
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
