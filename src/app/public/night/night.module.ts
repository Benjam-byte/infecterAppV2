import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NightPageRoutingModule } from './night-routing.module';

import { NightPage } from './night.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NightPageRoutingModule
  ],
  declarations: [NightPage]
})
export class NightPageModule {}
