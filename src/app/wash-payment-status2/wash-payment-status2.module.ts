import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WashPaymentStatus2PageRoutingModule } from './wash-payment-status2-routing.module';

import { WashPaymentStatus2Page } from './wash-payment-status2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashPaymentStatus2PageRoutingModule
  ],
  declarations: [WashPaymentStatus2Page]
})
export class WashPaymentStatus2PageModule {}
