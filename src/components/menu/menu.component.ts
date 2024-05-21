import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { ProductService } from '../../services/productList/product.service';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CategoryComponent],
  providers: [ProductService],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  selectedSubcategory: Category | null = null;
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  onSelectCategory(category: Category): void {
    this.selectedCategory = category;
    this.selectedSubcategory = null; // Reset subcategory selection
    this.products = [];
  }

  onSelectSubcategory(subcategory: Category): void {
    this.selectedSubcategory = subcategory;
    this.products = subcategory.products;
  }
}
