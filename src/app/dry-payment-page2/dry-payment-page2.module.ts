import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DryPaymentPage2PageRoutingModule } from './dry-payment-page2-routing.module';
import { DryPaymentPage2Page } from './dry-payment-page2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DryPaymentPage2PageRoutingModule
  ],
  declarations: [DryPaymentPage2Page]
})
export class DryPaymentPage2PageModule {}
