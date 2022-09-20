import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectBilanSanguinPageRoutingModule } from './select-bilan-sanguin-routing.module';

import { SelectBilanSanguinPage } from './select-bilan-sanguin.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectBilanSanguinPageRoutingModule
  ],
  declarations: [SelectBilanSanguinPage]
})
export class SelectBilanSanguinPageModule {}
