import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DryPaymentPage4Page } from './dry-payment-page4.page';

const routes: Routes = [
  {
    path: '',
    component: DryPaymentPage4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DryPaymentPage4PageRoutingModule {}
