import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wash-payment-page2',
  templateUrl: './wash-payment-page2.page.html',
  styleUrls: ['./wash-payment-page2.page.scss'],
})
export class WashPaymentPage2Page {

  constructor(
    private router: Router,
  ) { }

  pay() {
    // Navigate to the appropriate route for getting started
    this.router.navigateByUrl('/wash-payment-status2');
  }

}
