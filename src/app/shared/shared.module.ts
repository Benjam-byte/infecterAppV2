import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { BackgroundP5Component } from './background-p5/background-p5.component';
import { ButtonComponent } from './button/button.component';
import { WmLogoComponent } from './wm-logo/wm-logo.component';


@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [BackgroundP5Component,ButtonComponent,WmLogoComponent],
  exports: [BackgroundP5Component,ButtonComponent,WmLogoComponent]
})
export class SharedModule {}
