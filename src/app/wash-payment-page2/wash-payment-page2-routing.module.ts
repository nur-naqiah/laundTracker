import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashPaymentPage2Page } from './wash-payment-page2.page';

const routes: Routes = [
  {
    path: '',
    component: WashPaymentPage2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashPaymentPage2PageRoutingModule {}
