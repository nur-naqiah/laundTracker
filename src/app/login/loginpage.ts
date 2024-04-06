import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {

  constructor(private router: Router) {}

  getStarted() {
    // Navigate to the appropriate route for getting started
    this.router.navigateByUrl('/getting-started');
  }
}
