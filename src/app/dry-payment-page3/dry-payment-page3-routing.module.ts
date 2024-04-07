import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DryPaymentPage3Page } from './dry-payment-page3.page';

const routes: Routes = [
  {
    path: '',
    component: DryPaymentPage3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DryPaymentPage3PageRoutingModule {}
