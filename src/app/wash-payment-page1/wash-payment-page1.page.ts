import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wash-payment-page1',
  templateUrl: './wash-payment-page1.page.html',
  styleUrls: ['./wash-payment-page1.page.scss'],
})
export class WashPaymentPage1Page {

  constructor(
    private router: Router,
  ) { }

  pay() {
    // Navigate to the appropriate route for getting started
    this.router.navigateByUrl('/wash-payment-status');
  }

}
