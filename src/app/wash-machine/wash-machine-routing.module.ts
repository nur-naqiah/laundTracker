import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WashMachinePage } from './wash-machine.page';

const routes: Routes = [
  {
    path: '',
    component: WashMachinePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WashMachinePageRoutingModule {}
