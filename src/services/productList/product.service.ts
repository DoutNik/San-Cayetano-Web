import { Injectable } from '@angular/core';
import { Product, ProductSize, ProductType } from '../../models/product.model';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  getCategories(): Category[] {
    return [
      new Category(
        'Pizzas',
        [],
        [
          new Category('Clasicas', [
            new Product(
              1,
              'Muzzarela',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, orégano y aceitunas',
              ''
            ),
            new Product(
              2,
              'Muzzarela con ajo',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, ajo, orégano y aceitunas',
              ''
            ),
            new Product(
              3,
              'Provenzal',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, huevo, orégano y aceitunas',
              ''
            ),

            new Product(
              4,
              'Fugazza',
              ProductType.pizza,
              ProductSize.large,
              'Cebollas, condimentos y aceitunas',
              ''
            ),
          ]),

          new Category('Tradicionales', [
            new Product(
              5,
              'Muzzarela con huevo',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, huevo, orégano y aceitunas',
              ''
            ),
            new Product(
              6,
              'Muzzarela con morron',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, morrones, orégano y aceitunas',
              ''
            ),
            new Product(
              7,
              'Muzzarela con anchoas',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, anchoas, orégano y aceitunas',
              ''
            ),
            new Product(
              8,
              'Muzzarela con rúcula',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, rúcula, orégano y aceitunas',
              ''
            ),
            new Product(
              9,
              'Muzzarela con ajíes',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, ajíes al vinagre, orégano y aceitunas',
              ''
            ),
            new Product(
              10,
              'Fugazzeta',
              ProductType.pizza,
              ProductSize.large,
              'Queso mozzarella, cebollas y aceitunas',
              ''
            ),
            new Product(
              11,
              'Espinaca',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, cebolla, espinaca, salsa blanca y aceitunas',
              ''
            ),
            new Product(
              12,
              'De verdeo',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, cebolla de verdeo picada, mozzarella y aceitunas',
              ''
            ),
            new Product(
              13,
              'Choclo',
              ProductType.pizza,
              ProductSize.large,
              'salsa de tomate, mozzarella y choclo',
              ''
            ),
            new Product(
              14,
              'Napolitana',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, tomates y oregano',
              ''
            ),
            new Product(
              15,
              'Provolone',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, provolone y aceitunas',
              ''
            ),
            new Product(
              16,
              'Roquefort',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, roquefort y aceitunas',
              ''
            ),
            new Product(
              17,
              'Calabresa',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, salame y aceitunas',
              ''
            ),
            new Product(
              18,
              'Oleo',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              19,
              'Atún',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              20,
              'Palmitos',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, huevo, palmitos, salsa golf y orégano',
              ''
            ),
          ]),

          new Category('Especiales', [
            new Product(
              21,
              'Jamón y morrones',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, morrones y aceitunas',
              ''
            ),
            new Product(
              22,
              'Jamón y tomates',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, tomates y aceitunas',
              ''
            ),
            new Product(
              23,
              'Jamón y huevo',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, huevo y aceitunas',
              ''
            ),
            new Product(
              24,
              'Jamón y anchoas',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, anchoas y aceitunas',
              ''
            ),
            new Product(
              25,
              'Jamón y rúcula',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, queso sardo, jamon cocido, rucula y aceitunas',
              ''
            ),
            new Product(
              26,
              'Jamón y provolone',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, provolone y aceitunas',
              ''
            ),
            new Product(
              27,
              'Jamón y roquefort',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, roquefort y aceitunas',
              ''
            ),
            new Product(
              28,
              'Jamón y fugazzeta',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, cebolla y aceitunas',
              ''
            ),
            new Product(
              29,
              'Jamón y ananá',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, ananá y aceitunas',
              ''
            ),
            new Product(
              30,
              'Jamón y choclo',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, choclo y aceitunas',
              ''
            ),
          ]),

          new Category('Exclusivas', [
            new Product(
              31,
              'Palmitos con jamón',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),

            new Product(
              32,
              'Palmitos con ananá',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              33,
              'Panceta con rúcula',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, rúcula y panceta',
              ''
            ),
            new Product(
              34,
              'Jamón crudo con champignones',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón crudo, champignones y aceitunas',
              ''
            ),
            new Product(
              35,
              'Jamón crudo con rúcula',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, cheddar, condimentos y aceitunas',
              ''
            ),
            new Product(
              36,
              'Jamón crudo con provolone',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, cheddar, condimentos y aceitunas',
              ''
            ),
            new Product(
              37,
              'Jamón crudo con roquefort',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, cheddar, condimentos y aceitunas',
              ''
            ),
            new Product(
              38,
              'Calabresa con champignones',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, salame, champignones y aceitunas',
              ''
            ),
            new Product(
              39,
              'Calabresa con ajíes',
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, ajíes, champignones y aceitunas',
              ''
            ),
            new Product(
              40,
              'Cuatro Quesos',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              41,
              'siciliana',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              42,
              'Roquefort y fugazzeta',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              43,
              'Roquefort y anchoas',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              44,
              'Roquefort y napolitana',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              45,
              'Napolitana con huevo',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              46,
              'Napolitana con morrón',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              47,
              'Napolitana con anchoas',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              48,
              'Provolone con rúcula',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              49,
              'Pollo salteado con verduras',
              ProductType.pizza,
              ProductSize.large,
              'Pizza con masa cacera, salsa de tomate, queso muzzarela, pollo, orégano y aceitunas',
              ''
            ),
          ]),

          new Category('Rellenas y calzones', [
            new Product(
              50,
              'Fugazzeta rellena',
              ProductType.pizza,
              ProductSize.large,
              'Mozzarella, jamón cocido y cebolla',
              ''
            ),
            new Product(
              51,
              'Rellena vegetariana',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              52,
              'Rellena criolla',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              53,
              'Calzone tradicional',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              54,
              'Calzone napolitano',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              55,
              'Calzone de la casa',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
          ]),
          new Category('Otras variedades', [
            new Product(
              56,
              'De la casa',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              57,
              'Pollo con champignones',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              58,
              'Cayetano',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              59,
              'Americana',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              60,
              'Panceta con huevo a la plancha',
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
          ]),
        ]
      ),

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
