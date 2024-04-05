import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'front-page.page.html',
  styleUrls: ['front-page.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  getStarted() {
    // Navigate to the appropriate route for getting started
    this.router.navigateByUrl('/getting-started');
  }
}
