import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPartyParamPageRoutingModule } from './select-party-param-routing.module';

import { SelectPartyParamPage } from './select-party-param.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPartyParamPageRoutingModule
  ],
  declarations: [SelectPartyParamPage]
})
export class SelectPartyParamPageModule {}
