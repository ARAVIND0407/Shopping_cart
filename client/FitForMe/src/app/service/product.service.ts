import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { API_Products } from '../helpers/utilities';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts() {
    return this.http.get(API_Products);
  }
}
