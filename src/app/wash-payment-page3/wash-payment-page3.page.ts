import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wash-payment-page3',
  templateUrl: './wash-payment-page3.page.html',
  styleUrls: ['./wash-payment-page3.page.scss'],
})
export class WashPaymentPage3Page {

  constructor(
    private router: Router,
  ) { }

  pay() {
    // Navigate to the appropriate route for getting started
    this.router.navigateByUrl('/wash-payment-status');
  }

}
