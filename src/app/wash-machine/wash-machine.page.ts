import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-wash-machine',
  templateUrl: './wash-machine.page.html',
  styleUrls: ['./wash-machine.page.scss'],
})
export class WashMachinePage {

  constructor(private alertController: AlertController, private router: Router, private navCtrl: NavController) {}

  handleCardWashPayment1Click() {
    console.log('Card clicked! Navigating to another page...');
    this.navCtrl.navigateForward('/wash-payment-page1');
  }

  handleCardWashPayment2Click() {
    console.log('Card clicked! Navigating to another page...');
    this.navCtrl.navigateForward('/wash-payment-page2');
  }

  handleCardWashPayment3Click() {
    console.log('Card clicked! Navigating to another page...');
    this.navCtrl.navigateForward('/wash-payment-page3');
  }

  handleCardWashPayment4Click() {
    console.log('Card clicked! Navigating to another page...');
    this.navCtrl.navigateForward('/wash-payment-page4');
  }
}
