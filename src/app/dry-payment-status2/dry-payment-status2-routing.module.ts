import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DryPaymentStatus2Page } from './dry-payment-status2.page';

const routes: Routes = [
  {
    path: '',
    component: DryPaymentStatus2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DryPaymentStatus2PageRoutingModule {}
