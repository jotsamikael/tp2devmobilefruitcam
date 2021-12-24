import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs', 
    
    component: TabsPage,
    children:[
      {path: 'home', loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)},
      {
        path: 'favoris',
        loadChildren: () => import('../favoris/favoris.module').then( m => m.FavorisPageModule)
      },
      {
        path: 'aboutus',
        loadChildren: () => import('../aboutus/aboutus.module').then( m => m.AboutusPageModule)
      },



      {path: '', redirectTo: 'tabs/home', pathMatch:'full'}

      ]
    },
  {
    path: '',
    redirectTo:'tabs/home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
