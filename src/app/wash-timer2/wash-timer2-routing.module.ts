import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WashTimer2Page } from './wash-timer2.page';

const routes: Routes = [
  {
    path: '',
    component: WashTimer2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashTimer2PageRoutingModule {}
