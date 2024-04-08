import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dry-payment-page3',
  templateUrl: './dry-payment-page3.page.html',
  styleUrls: ['./dry-payment-page3.page.scss'],
})
export class DryPaymentPage3Page {

  constructor(
    private router: Router,
  ) { }

  pay() {
    // Navigate to the appropriate route for getting started
    this.router.navigateByUrl('/dry-payment-status');
  }

}
