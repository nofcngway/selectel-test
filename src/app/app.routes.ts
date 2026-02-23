import { Routes } from '@angular/router';
import { Home } from './pages/home/home.component';
import { Menu } from './pages/menu/menu.component';

export const routes: Routes = [
    { path: '', component: Home },
    { path: 'menu', component: Menu },
];
