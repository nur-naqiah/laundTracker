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
    // Perform the desired action when the card is clicked
    console.log('Card clicked! Navigating to another page...');
    // Example: Navigate to another page programmatically
    this.navCtrl.navigateForward('/dry-payment-page1');
  }

  handleCardDryPayment2Click() {
    // Perform the desired action when the card is clicked
    console.log('Card clicked! Navigating to another page...');
    // Example: Navigate to another page programmatically
    this.navCtrl.navigateForward('/dry-payment-page2');
  }

  handleCardDryPayment3Click() {
    // Perform the desired action when the card is clicked
    console.log('Card clicked! Navigating to another page...');
    // Example: Navigate to another page programmatically
    this.navCtrl.navigateForward('/dry-payment-page3');
  }

  handleCardDryPayment4Click() {
    // Perform the desired action when the card is clicked
    console.log('Card clicked! Navigating to another page...');
    // Example: Navigate to another page programmatically
    this.navCtrl.navigateForward('/dry-payment-page4');
  }
}
