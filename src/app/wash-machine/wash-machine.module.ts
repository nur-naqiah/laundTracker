import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WashMachinePageRoutingModule } from './wash-machine-routing.module';
import { WashMachinePage } from './wash-machine.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WashMachinePageRoutingModule
  ],
  declarations: [WashMachinePage]
})
export class WashMachinePageModule {}
