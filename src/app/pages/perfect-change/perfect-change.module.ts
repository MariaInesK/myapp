import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfectChangePageRoutingModule } from './perfect-change-routing.module';

import { PerfectChangePage } from './perfect-change.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfectChangePageRoutingModule
  ],
  declarations: [PerfectChangePage]
})
export class PerfectChangePageModule {}
