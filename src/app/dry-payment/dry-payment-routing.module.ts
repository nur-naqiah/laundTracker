import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DryPaymentPage } from './dry-payment.page';

const routes: Routes = [
  {
    path: '',
    component: DryPaymentPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DryPaymentPageRoutingModule {}
