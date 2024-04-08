import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WashPaymentStatusPageRoutingModule } from './wash-payment-status-routing.module';

import { WashPaymentStatusPage } from './wash-payment-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashPaymentStatusPageRoutingModule
  ],
  declarations: [WashPaymentStatusPage]
})
export class WashPaymentStatusPageModule {}
