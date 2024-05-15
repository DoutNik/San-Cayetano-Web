export enum ProductSize {
  small = 'chica',
  large = 'grande',
}

export enum ProductType {
  pizza = 'Pizza',
  sinAlcohol = 'Bebida sin alcohol',
  conAlcohol = 'Bebida con alcohol',
  empanada = 'Empanada',
  calzone = 'Calzone',
  lomo = 'Lomo',
}

export class Product {
  id: number;
  name: string;
  category: ProductType;
  size: ProductSize;
  description: string;
  brand: string;

  constructor(id: number, name: string, category: ProductType, size: ProductSize, description: string, brand: string) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.size = size;
    this.description = description;
    this.brand = brand;
  }
}