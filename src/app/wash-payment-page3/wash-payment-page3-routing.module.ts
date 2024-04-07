import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashPaymentPage3Page } from './wash-payment-page3.page';

const routes: Routes = [
  {
    path: '',
    component: WashPaymentPage3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashPaymentPage3PageRoutingModule {}
