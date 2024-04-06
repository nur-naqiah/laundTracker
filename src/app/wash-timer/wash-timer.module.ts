import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WashTimerPageRoutingModule } from './wash-timer-routing.module';

import { WashTimerPage } from './wash-timer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashTimerPageRoutingModule
  ],
  declarations: [WashTimerPage]
})
export class WashTimerPageModule {}
