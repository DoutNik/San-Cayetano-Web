import { Routes } from '@angular/router'
import { InicioComponent } from '../components/inicio/inicio.component';
import { MenuComponent,  } from '../components/menu/menu.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: "inicio", component: InicioComponent},
    {path: "menu", component: MenuComponent},
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];
