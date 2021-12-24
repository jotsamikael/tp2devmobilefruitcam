import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListfruitsPage } from './listfruits.page';

const routes: Routes = [
  {
    path: '',
    component: ListfruitsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListfruitsPageRoutingModule {}
