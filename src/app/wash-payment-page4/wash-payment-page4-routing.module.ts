import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashPaymentPage4Page } from './wash-payment-page4.page';

const routes: Routes = [
  {
    path: '',
    component: WashPaymentPage4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashPaymentPage4PageRoutingModule {}
