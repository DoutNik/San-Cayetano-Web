import { Routes } from '@angular/router'
import { InicioComponent } from '../components/inicio/inicio.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: '', redirectTo: 'inicio', pathMatch: 'full'},
    {path: "inicio", component: InicioComponent},
    {path: '**', component: PageNotFoundComponent}
];
