import { Product } from './product.model';

export class Category {
  name: string;
  products: Product[];
  subcategories: Category[] = [];


  constructor(name: string, products: Product[], subcategories: Category[] = []) {
    this.name = name;
    this.products = products;
    this.subcategories = subcategories;
  }
}