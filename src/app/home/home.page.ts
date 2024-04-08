import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router, private navCtrl: NavController) {}

  goToNotifications() {
    // Navigate to notifications page
    this.router.navigate(['/notifications']);
  }

  goToContact() {
    // Navigate to contact page
    this.router.navigate(['/contact']);
  }

  logout() {
    // Perform logout action (e.g., clear user session)
    // Redirect to login page
    this.router.navigate(['/login']);
  }

  goToDry() {
    // Navigate to dry machine page
    this.router.navigate(['/dry-machine']);
  }

  goToWash() {
    // Navigate to wash machine page
    this.router.navigate(['/wash-machine']);
  }

  handleCardDryClick() {
    // Perform the desired action when the card is clicked
    console.log('Card clicked! Navigating to another page...');
    this.navCtrl.navigateForward('/dry-machine');
  }

  handleCardWashClick() {
    // Perform the desired action when the card is clicked
    console.log('Card clicked! Navigating to another page...');
    this.navCtrl.navigateForward('/wash-machine');
  }

}
