import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    // Retorna la lista de productos
    return [
      //PIZZAS
      new Product(1, 'Muzzarela', 'Pizzas', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, oregano y aceitunas', 'cayetano'),
      new Product(2, 'Calabresa', 'Pizzas', 'mediana', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, salame y aceitunas', 'cayetano'),
      new Product(3, 'Fugazzeta', 'Pizzas', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, cebolla, oregano y aceitunas', 'cayetano'),
      new Product(4, 'Pollo', 'Pizzas', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, pollo, oregano y aceitunas', ''),
      new Product(5, 'Especial', 'Pizzas', 'mediana', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, jamon cocido y aceitunas', ''),
      new Product(6, 'Napolitana', 'Pizzas', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, tomate en rodajas, oregano y aceitunas', ''),
      new Product(7, 'Champignones', 'Pizzas', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, champignones, oregano y aceitunas', ''),
      //BEBIDAS
      new Product(8, 'Coca-Cola', 'Bebidas', 'Grande', '', ''),
      new Product(9, 'Cerveza', 'Bebidas', 'Chica', 'Cerveza negra amarga', ''),
      new Product(10, 'Vino', 'Bebidas', 'Grande', 'Vino blanco dulce', ''),

    ];
  }
}