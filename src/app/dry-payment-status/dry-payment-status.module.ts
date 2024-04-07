import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DryPaymentStatusPageRoutingModule } from './dry-payment-status-routing.module';

import { DryPaymentStatusPage } from './dry-payment-status.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DryPaymentStatusPageRoutingModule
  ],
  declarations: [DryPaymentStatusPage]
})
export class DryPaymentStatusPageModule {}
