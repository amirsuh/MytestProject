import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path:'', loadComponent:()=> import('./component/Layout/layout-component/layout-component').then(c=>c.LayoutComponent)
  }
];
