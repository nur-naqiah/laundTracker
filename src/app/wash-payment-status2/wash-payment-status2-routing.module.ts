import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashPaymentStatus2Page } from './wash-payment-status2.page';

const routes: Routes = [
  {
    path: '',
    component: WashPaymentStatus2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashPaymentStatus2PageRoutingModule {}
