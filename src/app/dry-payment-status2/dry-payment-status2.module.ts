import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DryPaymentStatus2PageRoutingModule } from './dry-payment-status2-routing.module';

import { DryPaymentStatus2Page } from './dry-payment-status2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DryPaymentStatus2PageRoutingModule
  ],
  declarations: [DryPaymentStatus2Page]
})
export class DryPaymentStatus2PageModule {}
