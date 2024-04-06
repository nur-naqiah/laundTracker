import { Component } from '@angular/core';
import { Router } from '@angular/router';

// import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  constructor(
    private router: Router,
    // private alertController: AlertController
  ) { }

  logIn() {
    // Navigate to the appropriate route for getting started
    this.router.navigateByUrl('/home');
  }

  // async createAccount() {
  //   // Retrieve input field values
  //   const username = (document.getElementById('username') as HTMLInputElement).value;
  //   const password = (document.getElementById('password') as HTMLInputElement).value;

  //   // Check if any of the fields are empty
  //   if (!username || !password) {
  //     // If any field is empty, show an alert asking the user to enter all details
  //     this.presentAlert('Error', 'Please enter all details first');
  //     return;
  //   }

  //   // Logic to create the account goes here

  //   // Simulating account creation with a delay
  //   await this.simulateAccountCreation();

  //   // Once the account is created, show the alert and navigate to the next page
  //   this.presentSuccessAlert();
  // }

  // async simulateAccountCreation() {
  //   // Simulate account creation with a delay
  //   return new Promise<void>((resolve) => {
  //     setTimeout(() => {
  //       resolve();
  //     }, 2000); // 2 seconds delay, replace it with your actual account creation logic
  //   });
  // }

  // async presentAlert(header: string, message: string) {
  //   const alert = await this.alertController.create({
  //     header: header,
  //     message: message,
  //     buttons: ['OK']
  //   });

  //   await alert.present();
  // }

  // async presentSuccessAlert() {
  //   const alert = await this.alertController.create({
  //     header: 'Success',
  //     message: 'Your account has been successfully created',
  //     buttons: [{
  //       text: 'OK',
  //       handler: () => {
  //         // Navigate to the next page after the user clicks "OK"
  //         this.router.navigateByUrl('/machine');
  //       }
  //     }]
  //   });

  //   await alert.present();
  // }
}
