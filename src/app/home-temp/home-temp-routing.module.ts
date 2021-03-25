import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeTempPage } from './home-temp.page';

const routes: Routes = [
  {
    path: '',
    component: HomeTempPage, 
    children:
    [
      {
        path: 'tab1',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfilePageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../pages/select-zone/select-zone.module').then(m => m.SelectZonePageModule )
      },
      {
        path: 'tab3',
        loadChildren: () => import('../pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeTempPageRoutingModule {}
