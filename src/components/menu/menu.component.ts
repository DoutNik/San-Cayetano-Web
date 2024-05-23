import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { ProductService } from '../../services/productList/product.service';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CategoryComponent],
  providers: [ProductService],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [
        animate(500)
      ]),
    ])
  ]
})
export class MenuComponent implements OnInit {
  categories: Category[] = [];
  selectedCategory: Category | null = null;
  selectedSubcategory: Category | null = null;
  products: Product[] = [];
  showCategories = true;
  showSubcategories = false;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.categories = this.productService.getCategories();
  }

  onSelectCategory(category: Category): void {
    this.selectedCategory = category;
    this.selectedSubcategory = null; // Reset subcategory selection
    this.products = [];
    this.showCategories = false; // Hide categories
    this.showSubcategories = true; // Show subcategories
  }

  onSelectSubcategory(subcategory: Category): void {
    this.selectedSubcategory = subcategory;
    this.products = subcategory.products;
    this.showSubcategories = false; // Hide subcategories
  }

  goBackToCategories(): void {
    this.selectedCategory = null;
    this.selectedSubcategory = null;
    this.products = [];
    this.showCategories = true; // Show categories again
    this.showSubcategories = false; // Hide subcategories
  }

  goBackToSubcategories(): void {
    this.selectedSubcategory = null;
    this.products = [];
    this.showSubcategories = true; // Show subcategories again
  }
}
