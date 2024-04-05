import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DryMachinePageRoutingModule } from './dry-machine-routing.module';

import { DryMachinePage } from './dry-machine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DryMachinePageRoutingModule
  ],
  declarations: [DryMachinePage]
})
export class DryMachinePageModule {}
