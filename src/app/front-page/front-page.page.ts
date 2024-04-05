import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  getStarted() {
    // Navigate to the appropriate route for getting started
    this.router.navigateByUrl('/getting-started');
  }
}
