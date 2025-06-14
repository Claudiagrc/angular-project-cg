import { Routes } from '@angular/router';
import { CartComponent } from './features/cart/cart.component';
import { MenuPizzaComponent } from './features/menuPizza/menuPizza.component';
import { HomeComponent } from './features/home/home.component';
import { PageNotFoundComponent } from './features/page-not-found.component';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'menu', component: MenuPizzaComponent },
    { path: 'cart', component: CartComponent },
    { path: '404', component: PageNotFoundComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' },
];
