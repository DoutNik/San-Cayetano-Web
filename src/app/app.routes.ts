import { Routes } from '@angular/router'
import { InicioComponent } from '../components/inicio/inicio.component';
import { ProductoCardComponent } from '../components/producto-card/producto-card.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: "inicio", component: InicioComponent},
    {path: "menu", component: ProductoCardComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
