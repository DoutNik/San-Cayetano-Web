export class Product {
    id: number;
    name: string;
    category: string;
    description: string;
    size: string;
    brand: string;
  
    constructor(id: number, name: string, category: string, size: string, description: string, brand: string) {
      this.id = id;
      this.name = name;
      this.category = category;
      this.size = size;
      this.description = description;
      this.brand = brand;
    }
  }
  