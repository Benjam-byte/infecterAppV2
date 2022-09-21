import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomePageRoutingModule } from './home-routing.module';

import { HomePage } from './home.page';

import { ButtonComponent } from 'src/app/shared/button/button.component';
import { WmLogoModule } from 'src/app/shared/wm-logo/wm-logo.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    WmLogoModule
  ],
  declarations: [HomePage,ButtonComponent]
})
export class HomePageModule {}
