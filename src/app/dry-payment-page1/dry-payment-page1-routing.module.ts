import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DryPaymentPage1Page } from './dry-payment-page1.page';

const routes: Routes = [
  {
    path: '',
    component: DryPaymentPage1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DryPaymentPage1PageRoutingModule {}
