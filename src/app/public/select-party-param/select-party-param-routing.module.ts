import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectPartyParamPage } from './select-party-param.page';

const routes: Routes = [
  {
    path: '',
    component: SelectPartyParamPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectPartyParamPageRoutingModule {}
