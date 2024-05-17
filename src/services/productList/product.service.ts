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
          'Salsa de tomate, queso muzzarela, orégano y aceitunas',
          ""
        ),
        new Product(
          2,
          'Muzzarela con huevo',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, queso muzzarela, huevo, orégano y aceitunas',
          ''
        ),
        new Product(
          3,
          'Muzzarela con morron',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, queso muzzarela, morrones, orégano y aceitunas',
          ''
        ),
        new Product(
          4,
          'Muzzarela con anchoas',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, queso muzzarela, anchoas, orégano y aceitunas',
          ''
        ),
        new Product(
          5,
          'Muzzarela con rúcula',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, queso muzzarela, rúcula, orégano y aceitunas',
          ''
        ),
        new Product(
          6,
          'Muzzarela con ajo',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, queso muzzarela, ajo, orégano y aceitunas',
          ''
        ),
        new Product(
          7,
          'Muzzarela con ajíes',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, queso muzzarela, ajíes al vinagre, orégano y aceitunas',
          ''
        ),
        new Product(
          8,
          'Fugazza',
          ProductType.pizza,
          ProductSize.large,
          'Cebollas, condimentos y aceitunas',
          ''
        ),
        new Product(
          9,
          'Fugazzeta',
          ProductType.pizza,
          ProductSize.large,
          'Queso mozzarella, cebollas y aceitunas',
          ''
        ),
        new Product(
          10,
          'Fugazzeta con roquefort',
          ProductType.pizza,
          ProductSize.large,
          'Queso mozzarella, queso roquefort, cebollas y aceitunas',
          ''
        ),
        new Product(
          11,
          'Fugazzeta rellena',
          ProductType.pizza,
          ProductSize.large,
          'Mozzarella, jamón cocido y cebolla',
          ''
        ),
        new Product(
          12,
          'Fugazzeta especial',
          ProductType.pizza,
          ProductSize.large,
          'Queso mozzarella, cebollas, jamón y aceitunas',
          ''
        ),
        new Product(
          13,
          'Jamon',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, jamón cocido y aceitunas',
          ''
        ),
        new Product(
          14,
          'Jamón y morrones',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, jamón cocido, morrones y aceitunas',
          ''
        ),
        new Product(
          15,
          'Jamón y tomates',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, jamón cocido, tomates y aceitunas',
          ''
        ),
        new Product(
          16,
          'Jamón y huevo',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, jamón cocido, huevo y aceitunas',
          ''
        ),
        new Product(
          17,
          'Jamón y anchoas',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, jamón cocido, anchoas y aceitunas',
          ''
        ),
        new Product(
          18,
          'Jamón y rúcula',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, queso sardo, jamon cocido, rucula y aceitunas',
          ''
        ),
        new Product(
          19,
          'Palmitos',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, huevo, palmitos, salsa golf y orégano',
          ''
        ),
        new Product(
          20,
          'Palmitos con jamón',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, huevo, palmitos, jamon cocido, salsa golf y orégano',
          ''
        ),
        new Product(
          21,
          'Palmitos con ananá',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, palmitos, ananá y aceitunas',
          ''
        ),
        new Product(
          22,
          'Espinaca',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, cebolla, espinaca, salsa blanca y aceitunas',
          ''
        ),
        new Product(
          23,
          'De verdeo',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, cebolla de verdeo picada, mozzarella y aceitunas',
          ''
        ),
        new Product(
          24,
          'Jamón crudo',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, jamón crudo, mozzarella y aceitunas',
          ''
        ),
        new Product(
          25,
          'Jamón crudo con rúcula',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, jamón crudo, rúcula y aceitunas',
          ''
        ),
        new Product(
          26,
          'Jamón crudo con provolone',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, jamón crudo, provolone y aceitunas',
          ''
        ),
        new Product(
          27,
          'Jamón crudo con champignones',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, jamón crudo, champignones y aceitunas',
          ''
        ),
        new Product(
          28,
          'Jamón ahumado',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, jamón ahumado, condimentos y aceitunas',
          ''
        ),
        new Product(
          29,
          'Panceta',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella y panceta',
          ''
        ),
        new Product(
          30,
          'Panceta con rúcula',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, rúcula y panceta',
          ''
        ),
        new Product(
          31,
          'Cheddar',
          ProductType.pizza,
          ProductSize.large,
          'Salsa de tomate, mozzarella, cheddar, condimentos y aceitunas',
          ''
        ),
        new Product(
          2,
          'Calabresa',
          ProductType.pizza,
          ProductSize.large,
          'Pizza con masa cacera, salsa de tomate, queso muzzarela, salame y aceitunas',
          ''
        ),

        new Product(
          4,
          'Pollo',
          ProductType.pizza,
          ProductSize.large,
          'Pizza con masa cacera, salsa de tomate, queso muzzarela, pollo, orégano y aceitunas',
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
