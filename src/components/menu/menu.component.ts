import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from '../category/category.component';
import { ComidasService } from '../../services/comidas/comida.service';
import { BebidasService } from '../../services/bebidas/bebidas.service';
import { Category } from '../../models/category.model';
import { Product } from '../../models/product.model';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, CategoryComponent],
  providers: [ComidasService, BebidasService],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0 })),
      transition('void <=> *', [animate(500)]),
    ]),
  ],
})
export class MenuComponent implements OnInit {
  comidas: Category[] = [];
  bebidas: Category[] = [];
  selectedFoodCategory: Category | null = null;
  selectedDrinkCategory: Category | null = null;
  selectedFoodSubcategory: Category | null = null;
  selectedDrinkSubcategory: Category | null = null;
  foodProducts: Product[] = [];
  drinkProducts: Product[] = [];
  showFoodCategories = true;
  showDrinkCategories = true;
  showFoodSubcategories = false;
  showDrinkSubcategories = false;
  showFoodProducts = false;
  showDrinkProducts = false;


  constructor(
    private comidaService: ComidasService,
    private bebidasService: BebidasService
  ) {}

  ngOnInit(): void {
    // Get categories for both comida and bebida
    this.comidas = this.comidaService.getCategories();
    this.bebidas = this.bebidasService.getCategories();
  }

  onSelectFoodCategory(category: Category): void {
    this.selectedFoodCategory = category;
    console.log(this.selectedFoodCategory);
    this.selectedFoodSubcategory = null;
    this.foodProducts = category.products;
    this.showFoodCategories = false;
    this.showFoodSubcategories = false;
    setTimeout(() => {
      if (category.subcategories.length === 0) {
        this.showFoodProducts = true;
      } else {
        this.showFoodSubcategories = true;
      }
    }, 500);
  }

  onSelectFoodSubcategory(subcategory: Category): void {
    this.selectedFoodSubcategory = subcategory;
    console.log(this.selectedFoodSubcategory);
    this.foodProducts = subcategory.products;
    this.showFoodSubcategories = false;
    setTimeout(() => {
      this.showFoodProducts = true;
    }, 500);
  }

  onSelectDrinkCategory(category: Category): void {
    this.selectedDrinkCategory = category;
    console.log(this.selectedDrinkCategory);

    this.selectedDrinkSubcategory = null; // Reset subcategory selection
    this.drinkProducts = category.products;
    this.showDrinkCategories = false; // Hide drink categories
    this.showDrinkSubcategories = false;

    setTimeout(() => {
      if (category.subcategories.length === 0) {
        this.showDrinkProducts = true;
      } else {
        this.showDrinkSubcategories = true;
      }
    }, 500);
  }



  onSelectDrinkSubcategory(subcategory: Category): void {
    this.selectedDrinkSubcategory = subcategory;
    console.log(this.selectedDrinkSubcategory);
    this.drinkProducts = subcategory.products;
    this.showDrinkSubcategories = false; // Hide subcategories
    setTimeout(() => {
      this.showDrinkProducts = true;
    }, 500);
  }

  goBackToFoodCategories(): void {
    this.selectedFoodCategory = null;
    this.selectedFoodSubcategory = null;
    this.foodProducts = [];
    this.showFoodProducts = false;
    this.showFoodSubcategories = false;
    setTimeout(() => {
      this.showFoodCategories = true;
    }, 500);
  }

  goBackToDrinkCategories(): void {
    this.selectedDrinkCategory = null;
    this.selectedDrinkSubcategory = null;
    this.drinkProducts = [];
    this.showDrinkProducts = false;
    this.showDrinkSubcategories = false;
    setTimeout(() => {
      this.showDrinkCategories = true;
    }, 500);
  }

  goBackToFoodSubcategories(): void {
    this.selectedFoodSubcategory = null;
    this.foodProducts = [];
    this.showFoodProducts = false;
    setTimeout(() => {
      this.showFoodSubcategories = true; // Show subcategories again
    }, 500);
  }

  goBackToDrinkSubcategories(): void {
    this.selectedDrinkSubcategory = null;
    this.drinkProducts = [];
    this.showDrinkProducts = false;
    setTimeout(() => {
      this.showDrinkSubcategories = true; // Show subcategories again
    }, 500);
  }
}
