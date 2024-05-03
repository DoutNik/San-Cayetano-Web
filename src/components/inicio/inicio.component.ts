import { Component } from '@angular/core';
import { DetalleComponent } from '../detalle/detalle.component';
import { Product } from '../../models/product.model';
import { ProductoCardComponent } from '../producto-card/producto-card.component';
import { ProductService } from '../../services/productList/product.service';


@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ProductoCardComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

  categories: string[] = ['Pizzas', 'Bebidas', 'Lomos y empanadas'];
  selectedCategory: string = 'Pizzas';
  filteredProducts: Product[] = [];

  constructor(private productService: ProductService) {
    this.filterProducts('Pizzas');
  }

  filterProducts(category: string): void {
    this.selectedCategory = category;
    this.filteredProducts = this.productService.getProducts().filter(product => product.category === category);
  }
}
