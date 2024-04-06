import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DryTimerPageRoutingModule } from './dry-timer-routing.module';

import { DryTimerPage } from './dry-timer.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DryTimerPageRoutingModule
  ],
  declarations: [DryTimerPage]
})
export class DryTimerPageModule {}
