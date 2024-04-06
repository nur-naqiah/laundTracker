import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  userName = 'John Doe'; // Example user name

  constructor(private router: Router) {}

  goToProfile() {
    // Navigate to profile page
    this.router.navigate(['/profile']);
  }

  goToNotifications() {
    // Navigate to notifications page
    this.router.navigate(['/notifications']);
  }

  goToMessages() {
    // Navigate to messages page
    this.router.navigate(['/messages']);
  }

  logout() {
    // Perform logout action (e.g., clear user session)
    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
