import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DryPaymentPage2Page } from './dry-payment-page2.page';

const routes: Routes = [
  {
    path: '',
    component: DryPaymentPage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DryPaymentPage2PageRoutingModule {}
