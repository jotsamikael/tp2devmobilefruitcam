import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListfruitsPageRoutingModule } from './listfruits-routing.module';

import { ListfruitsPage } from './listfruits.page';
import { FruitfilterPipe } from '../fruitfilter.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListfruitsPageRoutingModule
  ],
  declarations: [FruitfilterPipe,
    ListfruitsPage]
})
export class ListfruitsPageModule {}
