import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { WashTimer2PageRoutingModule } from './wash-timer2-routing.module';
import { WashTimer2Page } from './wash-timer2.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    WashTimer2PageRoutingModule
  ],
  declarations: [WashTimer2Page]
})
export class WashTimer2PageModule {}
