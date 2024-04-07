import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DryPaymentPage4PageRoutingModule } from './dry-payment-page4-routing.module';
import { DryPaymentPage4Page } from './dry-payment-page4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DryPaymentPage4PageRoutingModule
  ],
  declarations: [DryPaymentPage4Page]
})
export class DryPaymentPage4PageModule {}
