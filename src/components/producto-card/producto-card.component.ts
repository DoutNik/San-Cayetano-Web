// producto-card.component.ts
import { Component, Input } from '@angular/core';
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
  @Input() products: Product[] = [];
  categories: string[] = ['Pizzas', 'Bebidas', 'Lomos y empanadas'];
  selectedCategory: string = 'Pizzas';
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.filterProducts('Pizzas');
  }

  filterProducts(category: string): void {
    this.selectedCategory = category;
    this.filteredProducts = this.productService.getProducts().filter(product => product.category === category);
  }
}
