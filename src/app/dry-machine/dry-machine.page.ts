import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-dry-machine',
  templateUrl: './dry-machine.page.html',
  styleUrls: ['./dry-machine.page.scss'],
})
export class DryMachinePage {

  constructor(private alertController: AlertController) { }

  startMachine() {
    this.presentConfirmation();
  }

  async presentConfirmation() {
    const alert = await this.alertController.create({
      header: 'Start Machine',
      message: 'Do you want to start the machine?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Start',
          handler: () => {
            this.startMachineAlert();
          }
        }
      ]
    });

    await alert.present();
  }

  stopMachine() {
    this.presentStopping();
  }

  async presentStopping() {
    const alert = await this.alertController.create({
      header: 'Stop Machine',
      message: 'Are you sure you want to stop the machine?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Cancel clicked');
          }
        }, {
          text: 'Stop',
          handler: () => {
            this.stopMachineAlert();
          }
        }
      ]
    });

    await alert.present();
  }

  async stopMachineAlert() {
    const alert = await this.alertController.create({
      header: 'Machine Stopped',
      message: 'The machine has stopped.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async startMachineAlert() {
    const alert = await this.alertController.create({
      header: 'Machine Started',
      message: 'The machine has started.',
      buttons: ['OK']
    });

    await alert.present();
  }
}
