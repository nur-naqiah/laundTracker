import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DryPaymentPageRoutingModule } from './dry-payment-routing.module';

import { DryPaymentPage } from './dry-payment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DryPaymentPageRoutingModule
  ],
  declarations: [DryPaymentPage]
})
export class DryPaymentPageModule {}
