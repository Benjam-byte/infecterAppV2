import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { BackgroundP5Component } from './component/background-p5/background-p5.component';
import { ButtonComponent } from './component/button/button.component';
import { WmLogoComponent } from './component/wm-logo/wm-logo.component';
import { CardComponent } from './component/card/card.component';
import { PointLineComponent } from './component/point-line/point-line.component';
import { CarousselCardComponent } from './component/caroussel-card/caroussel-card.component';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
  ],
  declarations: [BackgroundP5Component,ButtonComponent,WmLogoComponent,CardComponent,PointLineComponent,CarousselCardComponent],
  exports: [BackgroundP5Component,ButtonComponent,WmLogoComponent,CardComponent,PointLineComponent,CarousselCardComponent]
})
export class SharedModule {}
