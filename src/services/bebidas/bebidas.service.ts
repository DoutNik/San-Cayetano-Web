import { Injectable } from '@angular/core';
import { CategoryType, Product, ProductSize, ProductType } from '../../models/product.model';
import { Category } from '../../models/category.model';

@Injectable({
  providedIn: 'root',
})
export class BebidasService {
  getCategories(): Category[] {
    return [
      new Category('Sin alcohol', "assets/categories/sinAlcoholCategory.jpg", [], [
        new Category('Grandes', "imageUrl", [
        new Product(
          61,
          'Coca-Cola',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          62,
          'Coca-Cola Zero',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          63,
          'Fanta',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          64,
          'Fanta Zero',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          65,
          'Sprite',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          66,
          'Sprite Zero',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          67,
          'Agua mineral',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          68,
          'Agua mineral con gas',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          69,
          'Saborizada Pera',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          70,
          'Saborizada Pomelo',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          71,
          'Saborizada Manzana',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          72,
          'Saborizada Naranja',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        ]),
        new Category('Individuales', "imageUrl", [
        new Product(
          73,
          'Coca-Cola',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          74,
          'Coca-Cola Zero',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          75,
          'Fanta',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          76,
          'Fanta Zero',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          77,
          'Sprite',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          78,
          'Sprite Zero',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          79,
          'Agua mineral',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          80,
          'Agua mineral con gas',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          81,
          'Saborizada Pera',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          82,
          'Saborizada Pomelo',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          83,
          'Saborizada Manzana',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
        new Product(
          84,
          'Saborizada Naranja',
          CategoryType.bebida,
          ProductType.sinAlcohol,
          ProductSize.small,
          '',
          ''
        ),
      ]),
    ]),


        new Category('Cervezas', "assets/categories/cervezasCategory.jpg", [
          new Product(
            29,
            'Imperial Golden',
            CategoryType.bebida,
            ProductType.conAlcohol,
            ProductSize.large,
            'Cerveza rubia suave',
            ''
          ),
          new Product(
            30,
            'Imperial Stout',
            CategoryType.bebida,
            ProductType.conAlcohol,
            ProductSize.large,
            'Cerveza negra dulce',
            ''
          ),
          new Product(
            31,
            'Imperial Clasica',
            CategoryType.bebida,
            ProductType.conAlcohol,
            ProductSize.large,
            'Cerveza rubia clasica',
            ''
          ),
          new Product(
            32,
            'Heineken',
            CategoryType.bebida,
            ProductType.conAlcohol,
            ProductSize.large,
            'Cerveza rubia clasica',
            ''
          ),
          new Product(
            32,
            'Stella Artois',
            CategoryType.bebida,
            ProductType.conAlcohol,
            ProductSize.large,
            'Cerveza rubia clasica',
            ''
          ),
          new Product(
            32,
            'Schneider',
            CategoryType.bebida,
            ProductType.conAlcohol,
            ProductSize.large,
            'Cerveza rubia clasica',
            ''
          ),
        ]),

        new Category('Tragos', "assets/categories/tragosCategory.webp", [
          new Product(
            33,
            'Fernet',
            CategoryType.bebida,
            ProductType.conAlcohol,
            ProductSize.large,
            '',
            ''
          ),
          new Product(
            33,
            'Gancia',
            CategoryType.bebida,
            ProductType.conAlcohol,
            ProductSize.large,
            '',
            ''
          ),
          new Product(
            33,
            'Gancia Batido',
            CategoryType.bebida,
            ProductType.conAlcohol,
            ProductSize.large,
            '',
            ''
          ),
          new Product(
            33,
            'Campari con naranja',
            CategoryType.bebida,
            ProductType.conAlcohol,
            ProductSize.large,
            '',
            ''
          ),
        ]),


      new Category('Vinos', "assets/categories/vinosCategory.jpg", [
        new Product(
          33,
          'Cafayate',
          CategoryType.bebida,
          ProductType.conAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          33,
          'Colón',
          CategoryType.bebida,
          ProductType.conAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          33,
          'Echart Privado',
          CategoryType.bebida,
          ProductType.conAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          33,
          'Santa Julia',
          CategoryType.bebida,
          ProductType.conAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          33,
          'Alma Mora',
          CategoryType.bebida,
          ProductType.conAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          33,
          'Dada',
          CategoryType.bebida,
          ProductType.conAlcohol,
          ProductSize.large,
          '',
          ''
        ),
        new Product(
          33,
          'Benjamin',
          CategoryType.bebida,
          ProductType.conAlcohol,
          ProductSize.large,
          '',
          ''
        ),
      ]),
    ];
  }
}
