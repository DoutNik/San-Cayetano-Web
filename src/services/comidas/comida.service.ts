import { Injectable } from '@angular/core';
import { CategoryType, Product, ProductSize, ProductType } from '../../models/product.model';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class ComidasService {
  getCategories(): Category[] {
    return [
      new Category(
        'Pizzas',
        "assets/categories/pizzaCategory.avif",
        [],
        [
          new Category('Clasicas', "assets/subcategories/pizzas/clasicasSubcategory.avif", [
            new Product(
              1,
              'Muzzarela',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, orégano y aceitunas',
              ''
            ),
            new Product(
              2,
              'Muzzarela con ajo',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, ajo, orégano y aceitunas',
              ''
            ),
            new Product(
              3,
              'Provenzal',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, huevo, orégano y aceitunas',
              ''
            ),

            new Product(
              4,
              'Fugazza',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Cebollas, condimentos y aceitunas',
              ''
            ),
          ]),

          new Category('Tradicionales', "assets/subcategories/pizzas/tradicionalesSubcategory.jpg", [
            new Product(
              5,
              'Muzzarela con huevo',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, huevo, orégano y aceitunas',
              ''
            ),
            new Product(
              6,
              'Muzzarela con morron',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, morrones, orégano y aceitunas',
              ''
            ),
            new Product(
              7,
              'Muzzarela con anchoas',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, anchoas, orégano y aceitunas',
              ''
            ),
            new Product(
              8,
              'Muzzarela con rúcula',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, rúcula, orégano y aceitunas',
              ''
            ),
            new Product(
              9,
              'Muzzarela con ajíes',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, queso muzzarela, ajíes al vinagre, orégano y aceitunas',
              ''
            ),
            new Product(
              10,
              'Fugazzeta',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Queso mozzarella, cebollas y aceitunas',
              ''
            ),
            new Product(
              11,
              'Espinaca',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, cebolla, espinaca, salsa blanca y aceitunas',
              ''
            ),
            new Product(
              12,
              'De verdeo',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, cebolla de verdeo picada, mozzarella y aceitunas',
              ''
            ),
            new Product(
              13,
              'Choclo',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'salsa de tomate, mozzarella y choclo',
              ''
            ),
            new Product(
              14,
              'Napolitana',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, tomates y oregano',
              ''
            ),
            new Product(
              15,
              'Provolone',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, provolone y aceitunas',
              ''
            ),
            new Product(
              16,
              'Roquefort',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, roquefort y aceitunas',
              ''
            ),
            new Product(
              17,
              'Calabresa',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, salame y aceitunas',
              ''
            ),
            new Product(
              18,
              'Oleo',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              19,
              'Atún',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              20,
              'Palmitos',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, huevo, palmitos, salsa golf y orégano',
              ''
            ),
          ]),

          new Category('Especiales', "assets/subcategories/pizzas/especialesSubcategory.jpg", [
            new Product(
              21,
              'Jamón y morrones',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, morrones y aceitunas',
              ''
            ),
            new Product(
              22,
              'Jamón y tomates',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, tomates y aceitunas',
              ''
            ),
            new Product(
              23,
              'Jamón y huevo',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, huevo y aceitunas',
              ''
            ),
            new Product(
              24,
              'Jamón y anchoas',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, anchoas y aceitunas',
              ''
            ),
            new Product(
              25,
              'Jamón y rúcula',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, queso sardo, jamon cocido, rucula y aceitunas',
              ''
            ),
            new Product(
              26,
              'Jamón y provolone',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, provolone y aceitunas',
              ''
            ),
            new Product(
              27,
              'Jamón y roquefort',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, roquefort y aceitunas',
              ''
            ),
            new Product(
              28,
              'Jamón y fugazzeta',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, cebolla y aceitunas',
              ''
            ),
            new Product(
              29,
              'Jamón y ananá',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, ananá y aceitunas',
              ''
            ),
            new Product(
              30,
              'Jamón y choclo',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón cocido, choclo y aceitunas',
              ''
            ),
          ]),

          new Category('Exclusivas', "assets/subcategories/pizzas/exclusivasSubcategory.jpg",[
            
            new Product(
              31,
              'Palmitos con jamón',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),

            new Product(
              32,
              'Palmitos con ananá',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              33,
              'Panceta con rúcula',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, rúcula y panceta',
              ''
            ),
            new Product(
              34,
              'Jamón crudo con champignones',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, jamón crudo, champignones y aceitunas',
              ''
            ),
            new Product(
              35,
              'Jamón crudo con rúcula',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, cheddar, condimentos y aceitunas',
              ''
            ),
            new Product(
              36,
              'Jamón crudo con provolone',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, cheddar, condimentos y aceitunas',
              ''
            ),
            new Product(
              37,
              'Jamón crudo con roquefort',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, cheddar, condimentos y aceitunas',
              ''
            ),
            new Product(
              38,
              'Calabresa con champignones',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, salame, champignones y aceitunas',
              ''
            ),
            new Product(
              39,
              'Calabresa con ajíes',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Salsa de tomate, mozzarella, ajíes, champignones y aceitunas',
              ''
            ),
            new Product(
              40,
              'Cuatro Quesos',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              41,
              'siciliana',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              42,
              'Roquefort y fugazzeta',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              43,
              'Roquefort y anchoas',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              44,
              'Roquefort y napolitana',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              45,
              'Napolitana con huevo',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              46,
              'Napolitana con morrón',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              47,
              'Napolitana con anchoas',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              48,
              'Provolone con rúcula',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              49,
              'Pollo salteado con verduras',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Pizza con masa cacera, salsa de tomate, queso muzzarela, pollo, orégano y aceitunas',
              ''
            ),
          ]),

          new Category('Rellenas y calzones', "assets/subcategories/pizzas/calzoneSubcategory.webp", [
            new Product(
              50,
              'Fugazzeta rellena',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              'Mozzarella, jamón cocido y cebolla',
              ''
            ),
            new Product(
              51,
              'Rellena vegetariana',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              52,
              'Rellena criolla',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              53,
              'Calzone tradicional',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              54,
              'Calzone napolitano',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              55,
              'Calzone de la casa',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
          ]),
          new Category('Otras variedades', "assets/subcategories/pizzas/otrasSubcategory.jpg", [
            new Product(
              56,
              'De la casa',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              57,
              'Pollo con champignones',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              58,
              'Cayetano',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              59,
              'Americana',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
            new Product(
              60,
              'Panceta con huevo a la plancha',
              CategoryType.comida,
              ProductType.pizza,
              ProductSize.large,
              '',
              ''
            ),
          ]),
        ]),


      new Category('Empanadas', "assets/categories/empanadasCategory.webp", [
        new Product(
          85,
          'Criollas',
          CategoryType.comida,
          ProductType.sinAlcohol,
          ProductSize.small,
          'Carne, cebolla y aceitunas',
          ''
        ),
        new Product(
          85,
          'Jamón y mozzarella',
          CategoryType.comida,
          ProductType.sinAlcohol,
          ProductSize.small,
          'Jamón cocido y queso mozzarella',
          ''
        ),
      ]),


        new Category('Tostados', "assets/categories/tostadosCategory.avif", [
          new Product(
            85,
            'Jamóm cocido',
            CategoryType.comida,
            ProductType.sinAlcohol,
            ProductSize.small,
            'Jamóm cocido y queso mozzarella',
            ''
          ),
          new Product(
            85,
            'Jamón crudo',
            CategoryType.comida,
            ProductType.sinAlcohol,
            ProductSize.small,
            'Jamón crudo y queso mozzarella',
            ''
          ),
        ]),

      
      new Category('Lomitos', "assets/categories/lomitosCategory.avif", [
        new Product(
          85,
          'Simple',
          CategoryType.comida,
          ProductType.sinAlcohol,
          ProductSize.small,
          'Carne, lechuga y tomate',
          ''
        ),
        new Product(
          85,
          'Completo',
          CategoryType.comida,
          ProductType.sinAlcohol,
          ProductSize.small,
          'Carne, lechuga, tomate, queso, jamón y huevo',
          ''
        ),
        new Product(
          85,
          'De la casa',
          CategoryType.comida,
          ProductType.sinAlcohol,
          ProductSize.small,
          'Carne, tomate, ajíes en vinagre, huevo, jamón crudo y mostaza',
          ''
        ),
        new Product(
          85,
          'Al plato',
          CategoryType.comida,
          ProductType.sinAlcohol,
          ProductSize.small,
          'Carne, cebolla y aceitunas',
          ''
        ),
        new Product(
          85,
          'Lomo pizza',
          CategoryType.comida,
          ProductType.sinAlcohol,
          ProductSize.small,
          'Carne, cebolla y aceitunas',
          ''
        ),
      ]),
   
    ];
  }
}
