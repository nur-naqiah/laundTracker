import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wash-payment-status',
  templateUrl: './wash-payment-status.page.html',
  styleUrls: ['./wash-payment-status.page.scss'],
})
export class WashPaymentStatusPage {

  constructor(
    private router: Router,
  ) { }

  proceed() {
    // Navigate to the appropriate route for getting started
    this.router.navigateByUrl('/wash-timer');
  }

}
