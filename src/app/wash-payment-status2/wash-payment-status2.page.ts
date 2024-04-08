import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wash-payment-status2',
  templateUrl: './wash-payment-status2.page.html',
  styleUrls: ['./wash-payment-status2.page.scss'],
})
export class WashPaymentStatus2Page {

  constructor(
    private router: Router,
  ) { }

  proceed() {
    // Navigate to the appropriate route for getting started
    this.router.navigateByUrl('/wash-timer2');
  }

}
