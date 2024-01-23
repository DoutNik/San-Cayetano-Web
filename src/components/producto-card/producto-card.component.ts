// producto-card.component.ts
import { Component } from '@angular/core';
import { Product } from '../../models/product.model';
import { CommonModule } from '@angular/common';
import { ProductService } from '../../services/productList/product.service';

@Component({
  selector: 'app-producto-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './producto-card.component.html',
  styleUrls: ['./producto-card.component.css']
})
export class ProductoCardComponent {
  products: Product[];

  constructor(private productService: ProductService) {
    this.products = this.productService.getProducts();
  }
}
