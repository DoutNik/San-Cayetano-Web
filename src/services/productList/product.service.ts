import { Injectable } from '@angular/core';
import { Product } from '../../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getProducts(): Product[] {
    // Retorna la lista de productos
    return [
      // ________ID,___nombre,____categoria,_tamaño,_descripcion
      //PIZZAS
      new Product(1, 'Muzzarela', 'Pizzas', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, oregano y aceitunas', 'cayetano'),
      new Product(2, 'Calabresa', 'Pizzas', 'mediana', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, salame y aceitunas', 'cayetano'),
      new Product(3, 'Fugazzeta', 'Pizzas', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, cebolla, oregano y aceitunas', 'cayetano'),
      new Product(4, 'Pollo', 'Pizzas', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, pollo, oregano y aceitunas', ''),
      new Product(5, 'Especial', 'Pizzas', 'mediana', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, jamon cocido y aceitunas', ''),
      new Product(6, 'Napolitana', 'Pizzas', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, tomate en rodajas, oregano y aceitunas', ''),
      new Product(7, 'Champignones', 'Pizzas', 'Grande', 'Pizza con masa cacera, salsa de tomate, queso muzzarela, champignones, oregano y aceitunas', ''),
      //BEBIDAS
      new Product(9, 'Coca-Cola', 'Bebidas', 'Grande', '', ''),
      new Product(10, 'Coca-Cola Zero', 'Bebidas', 'Grande', '', ''),
      new Product(11, 'Fanta', 'Bebidas', 'Grande', '', ''),
      new Product(12, 'Fanta Zero', 'Bebidas', 'Grande', '', ''),
      new Product(13, 'Sprite', 'Bebidas', 'Grande', '', ''),
      new Product(14, 'Sprite Zero', 'Bebidas', 'Grande', '', ''),
      new Product(15, 'Aquarius Pera', 'Bebidas', 'Grande', '', ''),
      new Product(16, 'Aquarius Pomelo', 'Bebidas', 'Grande', '', ''),
      new Product(17, 'Aquarius Manzana', 'Bebidas', 'Grande', '', ''),
      new Product(18, 'Aquarius Naranja', 'Bebidas', 'Grande', '', ''),
      new Product(19, 'Coca-Cola', 'Bebidas', 'chica', '', ''),
      new Product(20, 'Coca-Cola Zero', 'Bebidas', 'chica', '', ''),
      new Product(21, 'Fanta', 'Bebidas', 'chica', '', ''),
      new Product(22, 'Fanta Zero', 'Bebidas', 'chica', '', ''),
      new Product(23, 'Sprite', 'Bebidas', 'chica', '', ''),
      new Product(24, 'Sprite Zero', 'Bebidas', 'chica', '', ''),
      new Product(25, 'Aquarius Pera', 'Bebidas', 'chica', '', ''),
      new Product(26, 'Aquarius Pomelo', 'Bebidas', 'chica', '', ''),
      new Product(27, 'Aquarius Manzana', 'Bebidas', 'chica', '', ''),
      new Product(28, 'Aquarius Naranja', 'Bebidas', 'chica', '', ''),

      new Product(29, 'Imperial Golden', 'Bebidas', 'grande', 'Cerveza rubia suave', ''),
      new Product(30, 'Imperial Stout', 'Bebidas', 'grande', 'Cerveza negra dulce', ''),
      new Product(31, 'Imperial Clasica', 'Bebidas', 'grande', 'Cerveza rubia clasica', ''),
      new Product(32, 'Heineken', 'Bebidas', 'grande', 'Cerveza rubia clasica', ''),
      new Product(33, 'Vino', 'Bebidas', 'Grande', 'Vino blanco dulce', ''),

    ];
  }
}