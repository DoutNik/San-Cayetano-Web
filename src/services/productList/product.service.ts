import { Injectable } from '@angular/core';
import { Product, ProductSize, ProductType } from '../../models/product.model';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getCategories(): Category[] {
    return [
      new Category('Pizzas', [
        new Product(
          1,
          'Muzzarela',
          ProductType.pizza,
          ProductSize.large,
          'Pizza con masa cacera, salsa de tomate, queso muzzarela, oregano y aceitunas',
          'cayetano'
        ),
        new Product(
          2,
          'Calabresa',
          ProductType.pizza,
          ProductSize.large,
          'Pizza con masa cacera, salsa de tomate, queso muzzarela, salame y aceitunas',
          'cayetano'
        ),
        new Product(
          3,
          'Fugazzeta',
          ProductType.pizza,
          ProductSize.large,
          'Pizza con masa cacera, salsa de tomate, queso muzzarela, cebolla, oregano y aceitunas',
          'cayetano'
        ),
        new Product(
          4,
          'Pollo',
          ProductType.pizza,
          ProductSize.large,
          'Pizza con masa cacera, salsa de tomate, queso muzzarela, pollo, oregano y aceitunas',
          ''
        ),
        new Product(
          5,
          'Especial',
          ProductType.pizza,
          ProductSize.large,
          'Pizza con masa cacera, salsa de tomate, queso muzzarela, jamon cocido y aceitunas',
          ''
        ),
        new Product(
          6,
          'Napolitana',
          ProductType.pizza,
          ProductSize.large,
          'Pizza con masa cacera, salsa de tomate, queso muzzarela, tomate en rodajas, oregano y aceitunas',
          ''
        ),
        new Product(
          7,
          'Champignones',
          ProductType.pizza,
          ProductSize.large,
          'Pizza con masa cacera, salsa de tomate, queso muzzarela, champignones, oregano y aceitunas',
          ''
        ),
      ]),

      new Category('Bebidas sin alcohol', [
        new Product(
          9,
          'Coca-Cola',
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          10,
          'Coca-Cola Zero',
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          11,
          'Fanta',
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          12,
          'Fanta Zero',
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          13,
          'Sprite',
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          14,
          'Sprite Zero',
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          15,
          'Aquarius Pera',
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          16,
          'Aquarius Pomelo',
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          17,
          'Aquarius Manzana',
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          18,
          'Aquarius Naranja',
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          19,
          'Coca-Cola',
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          20,
          'Coca-Cola Zero',
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          21,
          'Fanta',
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          22,
          'Fanta Zero',
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          23,
          'Sprite',
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          24,
          'Sprite Zero',
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          25,
          'Aquarius Pera',
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          26,
          'Aquarius Pomelo',
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          27,
          'Aquarius Manzana',
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          28,
          'Aquarius Naranja',
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
      ]),
      new Category('Bebidas con alcohol', [
        new Product(
          29,
          'Imperial Golden',
          ProductType.conAlcohol,
          ProductSize.large,
          'Cerveza rubia suave',
          ''
        ),
        new Product(
          30,
          'Imperial Stout',
          ProductType.conAlcohol,
          ProductSize.large,
          'Cerveza negra dulce',
          ''
        ),
        new Product(
          31,
          'Imperial Clasica',
          ProductType.conAlcohol,
          ProductSize.large,
          'Cerveza rubia clasica',
          ''
        ),
        new Product(
          32,
          'Heineken',
          ProductType.conAlcohol,
          ProductSize.large,
          'Cerveza rubia clasica',
          ''
        ),
        new Product(
          33,
          'Vino',
          ProductType.conAlcohol,
          ProductSize.large,
          'Vino blanco dulce',
          ''
        ),
        // Otras bebidas con alcohol...
      ]),
      // Otras categorías...
    ];
  }
}
