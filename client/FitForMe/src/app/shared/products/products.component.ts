import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})

export class ProductsComponent {
  @Input() LoginStatus?: boolean;
  products?: any[];
  constructor(
    private service: ProductService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getProducts().subscribe({
      next: (response: any) => {
        this.products = response
      }
    })
  }
  SendData(product:any) {
    this.router.navigate(['customer/cart']);
  }
}
