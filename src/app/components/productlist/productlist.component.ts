import { Component } from '@angular/core';
import { Product } from './product';
import { OnInit } from '@angular/core';
import { ServiceService } from './service.service';
@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrl: './productlist.component.css'
})
export class ProductlistComponent  {
  products: Product[] = [];

  constructor(private productService: ServiceService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
}
