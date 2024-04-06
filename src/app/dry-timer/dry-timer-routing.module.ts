import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DryTimerPage } from './dry-timer.page';

const routes: Routes = [
  {
    path: '',
    component: DryTimerPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DryTimerPageRoutingModule {}
