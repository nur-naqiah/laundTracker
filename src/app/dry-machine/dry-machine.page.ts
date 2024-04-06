import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dry-machine',
  templateUrl: './dry-machine.page.html',
  styleUrls: ['./dry-machine.page.scss'],
})
export class DryMachinePage {

  constructor(
    private alertController: AlertController,
    private router: Router
    ) { }
     
  goToPayment() {
    // Navigate to messages page
    this.router.navigate(['/payment']);
  }
}
