import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeTempPageRoutingModule } from './home-temp-routing.module';

import { HomeTempPage } from './home-temp.page';




@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeTempPageRoutingModule,
  
  ],
  declarations: [HomeTempPage]
})
export class HomeTempPageModule {}
