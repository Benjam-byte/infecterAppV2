import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SelectBilanSanguinPage } from './select-bilan-sanguin.page';

const routes: Routes = [
  {
    path: '',
    component: SelectBilanSanguinPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SelectBilanSanguinPageRoutingModule {}
