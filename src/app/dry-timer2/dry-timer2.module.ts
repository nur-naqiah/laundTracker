import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { DryTimer2PageRoutingModule } from './dry-timer2-routing.module';
import { DryTimer2Page } from './dry-timer2.page';

@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    DryTimer2PageRoutingModule
  ],
  declarations: [DryTimer2Page]
})
export class DryTimer2PageModule {}
