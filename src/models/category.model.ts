import { Product } from './product.model';

export class Category {
  name: string;
  imageUrl: string;
  products: Product[];
  subcategories: Category[] = [];


  constructor(name: string, imageUrl: string, products: Product[], subcategories: Category[] = []) {
    this.name = name;
    this.imageUrl = imageUrl
    this.products = products;
    this.subcategories = subcategories;
  }
}