import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DryTimerPageRoutingModule } from './dry-timer-routing.module';
import { DryTimerPage } from './dry-timer.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DryTimerPageRoutingModule
  ],
  declarations: [DryTimerPage]
})
export class DryTimerPageModule {}
