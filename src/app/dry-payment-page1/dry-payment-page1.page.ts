import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dry-payment-page1',
  templateUrl: './dry-payment-page1.page.html',
  styleUrls: ['./dry-payment-page1.page.scss'],
})
export class DryPaymentPage1Page {

  constructor(
    private router: Router,
  ) { }

  pay() {
    // Navigate to the appropriate route for getting started
    this.router.navigateByUrl('/dry-payment-status');
  }

}
