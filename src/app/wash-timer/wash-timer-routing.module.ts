import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashTimerPage } from './wash-timer.page';

const routes: Routes = [
  {
    path: '',
    component: WashTimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashTimerPageRoutingModule {}
