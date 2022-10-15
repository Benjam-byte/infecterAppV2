import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SelectPartyParamPageRoutingModule } from './select-party-param-routing.module';

import { SelectPartyParamPage } from './select-party-param.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ParamSelectorComponent } from './param-selector/param-selector.component';
import { ParamService } from 'src/app/core/service/param.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SelectPartyParamPageRoutingModule,
    SharedModule,
  ],
  declarations: [SelectPartyParamPage,ParamSelectorComponent,],
  exports:[ParamSelectorComponent],
  providers:[ParamService]
})
export class SelectPartyParamPageModule {}
