import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  private products: Product[] = [
    { id: 1, name: 'Product 1', price: 100, description: 'Description 1', imageUrl: 'url1.jpg', category: 'Category 1' },
    // Add more products
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
