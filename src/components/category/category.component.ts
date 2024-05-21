import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Category } from '../../models/category.model';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {
  @Input() category!: Category;
  selectedSubcategory: Category | null = null;

  onSelectSubcategory(subcategory: Category): void {
    this.selectedSubcategory = subcategory;
  }
}
