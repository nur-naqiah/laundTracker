import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DryPaymentPage3PageRoutingModule } from './dry-payment-page3-routing.module';
import { DryPaymentPage3Page } from './dry-payment-page3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DryPaymentPage3PageRoutingModule
  ],
  declarations: [DryPaymentPage3Page]
})
export class DryPaymentPage3PageModule {}
