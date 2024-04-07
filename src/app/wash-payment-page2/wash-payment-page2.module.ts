import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WashPaymentPage2PageRoutingModule } from './wash-payment-page2-routing.module';
import { WashPaymentPage2Page } from './wash-payment-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashPaymentPage2PageRoutingModule
  ],
  declarations: [WashPaymentPage2Page]
})
export class WashPaymentPage2PageModule {}
