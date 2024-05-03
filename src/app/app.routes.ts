import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./features/home/home.component').then((x) => x.HomeComponent),
  },
  {
    path: 'user-list',
    loadComponent: () =>
      import('./features/user-list/user-list.component').then(
        (x) => x.UserListComponent,
      ),
  },
  {
    path: '404',
    loadComponent: () =>
      import(
        './shared/components/page-not-found/page-not-found.component'
      ).then((x) => x.PageNotFoundComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: '404',
  },
];
