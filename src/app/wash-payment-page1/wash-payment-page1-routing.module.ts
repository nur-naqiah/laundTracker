import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashPaymentPage1Page } from './wash-payment-page1.page';

const routes: Routes = [
  {
    path: '',
    component: WashPaymentPage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashPaymentPage1PageRoutingModule {}
