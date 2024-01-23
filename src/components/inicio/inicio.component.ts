import { Component } from '@angular/core';
import { DetalleComponent } from '../detalle/detalle.component';
import { ProductoCardComponent } from '../producto-card/producto-card.component';

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [ProductoCardComponent],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css'
})
export class InicioComponent {

}
