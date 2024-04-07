import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WashPaymentPage1PageRoutingModule } from './wash-payment-page1-routing.module';
import { WashPaymentPage1Page } from './wash-payment-page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashPaymentPage1PageRoutingModule
  ],
  declarations: [WashPaymentPage1Page]
})
export class WashPaymentPage1PageModule {}
