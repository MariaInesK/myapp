import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfectChangePage } from './perfect-change.page';

const routes: Routes = [
  {
    path: '',
    component: PerfectChangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfectChangePageRoutingModule {}
