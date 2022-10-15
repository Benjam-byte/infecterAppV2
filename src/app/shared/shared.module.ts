import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { BackgroundP5Component } from './component/background-p5/background-p5.component';
import { ButtonComponent } from './component/button/button.component';
import { WmLogoComponent } from './component/wm-logo/wm-logo.component';
import { CardComponent } from './component/card/card.component';
import { PointLineComponent } from './component/point-line/point-line.component';
import { CarousselCardComponent } from './component/caroussel-card/caroussel-card.component';
import { LineSelectorComponent } from './component/line-selector/line-selector.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  declarations: [BackgroundP5Component,ButtonComponent,WmLogoComponent,CardComponent,PointLineComponent,CarousselCardComponent
    ,LineSelectorComponent],
  exports: [BackgroundP5Component,ButtonComponent,WmLogoComponent,CardComponent,PointLineComponent,CarousselCardComponent,
    LineSelectorComponent]
})
export class SharedModule {}
