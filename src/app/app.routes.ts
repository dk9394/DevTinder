import { Routes } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

export const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
  },
  {
    path: 'feeds',
    loadChildren: () =>
      import('./feeds/feeds.module').then((m) => m.FeedsModule),
  },
  { path: '', component: WelcomeComponent, pathMatch: 'full' },
  { path: '**', redirectTo: 'welcome' },
];
