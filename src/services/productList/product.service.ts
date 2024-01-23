import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    // Retorna la lista de productos
    return [
      new Product(1, 'Muzzarela', 'Pizza', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, oregano y aceitunas', ''),
      new Product(1, 'Calabresa', 'Pizza', 'mediana', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, salame y aceitunas', ''),
      new Product(1, 'Fugazzeta', 'Pizza', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, cebolla, oregano y aceitunas', ''),
      new Product(1, 'Pollo', 'Pizza', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, pollo, oregano y aceitunas', ''),
      new Product(1, 'Especial', 'Pizza', 'mediana', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, jamon cocido y aceitunas', ''),
      new Product(1, 'Napolitana', 'Pizza', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, tomate en rodajas, oregano y aceitunas', ''),
      new Product(1, 'Champignones', 'Pizza', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, champignones, oregano y aceitunas', ''),
    ];
  }
}