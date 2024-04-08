import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashPaymentStatusPage } from './wash-payment-status.page';

const routes: Routes = [
  {
    path: '',
    component: WashPaymentStatusPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashPaymentStatusPageRoutingModule {}
