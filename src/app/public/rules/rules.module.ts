import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RulesPageRoutingModule } from './rules-routing.module';

import { RulesPage } from './rules.page';
import { WmLogoModule } from 'src/app/shared/wm-logo/wm-logo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RulesPageRoutingModule,
    WmLogoModule
  ],
  declarations: [RulesPage]
})
export class RulesPageModule {}
