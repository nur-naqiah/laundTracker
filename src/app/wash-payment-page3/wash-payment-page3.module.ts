import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WashPaymentPage3PageRoutingModule } from './wash-payment-page3-routing.module';
import { WashPaymentPage3Page } from './wash-payment-page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashPaymentPage3PageRoutingModule
  ],
  declarations: [WashPaymentPage3Page]
})
export class WashPaymentPage3PageModule {}
