import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-dry-machine',
  templateUrl: './dry-machine.page.html',
  styleUrls: ['./dry-machine.page.scss'],
})
export class DryMachinePage {

  constructor(private alertController: AlertController, private router: Router, private navCtrl: NavController) {}

  handleCardDryPayment1Click() {
    console.log('Card clicked! Navigating to another page...');
    this.navCtrl.navigateForward('/dry-payment-page1');
  }

  handleCardDryPayment2Click() {
    console.log('Card clicked! Navigating to another page...');
    this.navCtrl.navigateForward('/dry-payment-page2');
  }

  handleCardDryPayment3Click() {
    console.log('Card clicked! Navigating to another page...');
    this.navCtrl.navigateForward('/dry-payment-page3');
  }

  handleCardDryPayment4Click() {
    console.log('Card clicked! Navigating to another page...');
    this.navCtrl.navigateForward('/dry-payment-page4');
  }
}
