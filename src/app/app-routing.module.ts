import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SelectZonePage } from './pages/select-zone/select-zone.page';

const routes: Routes = [
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  
  {
    path: 'index',
    loadChildren: () => import('./index/index.module').then( m => m.IndexPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then( m => m.NotificationsPageModule)
  },
  {
    path: 'permissions',
    loadChildren: () => import('./pages/permissions/permissions.module').then( m => m.PermissionsPageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/start/start.module').then( m => m.StartPageModule)
  },
  {
    path: 'home-temp',
    loadChildren: () => import('./home-temp/home-temp.module').then( m => m.HomeTempPageModule)
  },
  {
    path: 'select-zone',
    loadChildren: () => import('./pages/select-zone/select-zone.module').then( m => m.SelectZonePageModule)
  },
  {
    path: 'summary',
    loadChildren: () => import('./pages/summary/summary.module').then( m => m.SummaryPageModule)
  },
  {
    path: 'perfect-change',
    loadChildren: () => import('./pages/perfect-change/perfect-change.module').then( m => m.PerfectChangePageModule)
  },
  {
    path: 'range',
    loadChildren: () => import('./pages/range/range.module').then( m => m.RangePageModule)
  },
  {
    path: 'temperature',
    loadChildren: () => import('./pages/temperature/temperature.module').then( m => m.TemperaturePageModule)
  },
  
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}



