import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NightPage } from './night.page';

const routes: Routes = [
  {
    path: '',
    component: NightPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NightPageRoutingModule {}
