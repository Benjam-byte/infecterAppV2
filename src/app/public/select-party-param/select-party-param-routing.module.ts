import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPartyParamPage } from './select-party-param.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPartyParamPage,
    children:[
      {
        path: 'select-bilan-sanguin',
    loadChildren: () => import('../select-bilan-sanguin/select-bilan-sanguin.module').then( m => m.SelectBilanSanguinPageModule)
      },
    ]
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPartyParamPageRoutingModule {}
