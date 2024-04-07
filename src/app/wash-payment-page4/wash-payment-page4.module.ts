import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WashPaymentPage4PageRoutingModule } from './wash-payment-page4-routing.module';
import { WashPaymentPage4Page } from './wash-payment-page4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashPaymentPage4PageRoutingModule
  ],
  declarations: [WashPaymentPage4Page]
})
export class WashPaymentPage4PageModule {}
