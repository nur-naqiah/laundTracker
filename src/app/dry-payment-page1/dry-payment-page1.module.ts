import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DryPaymentPage1PageRoutingModule } from './dry-payment-page1-routing.module';
import { DryPaymentPage1Page } from './dry-payment-page1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DryPaymentPage1PageRoutingModule
  ],
  declarations: [DryPaymentPage1Page]
})
export class DryPaymentPage1PageModule {}
