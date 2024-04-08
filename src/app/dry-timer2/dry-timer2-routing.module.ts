import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DryTimer2Page } from './dry-timer2.page';

const routes: Routes = [
  {
    path: '',
    component: DryTimer2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DryTimer2PageRoutingModule {}
