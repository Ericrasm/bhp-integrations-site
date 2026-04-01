import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home').then(m => m.default),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.default),
  },
  {
    path: 'about/faq',
    loadComponent: () => import('./pages/faq/faq').then(m => m.default),
  },
  {
    path: 'about/blogs',
    loadComponent: () => import('./pages/blogs/blogs').then(m => m.default),
  },
  {
    path: 'about/careers',
    loadComponent: () => import('./pages/careers/careers').then(m => m.default),
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then(m => m.default),
  },
  {
    path: 'services/:slug',
    loadComponent: () => import('./pages/service-detail/service-detail').then(m => m.default),
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.default),
  },
  {
    path: '**',
    redirectTo: '',
  },
];
