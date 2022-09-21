import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { WmLogoComponent } from './wm-logo.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [WmLogoComponent],
  exports: [WmLogoComponent]
})
export class WmLogoModule {}
