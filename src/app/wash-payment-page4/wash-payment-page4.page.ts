import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-wash-payment-page4',
  templateUrl: './wash-payment-page4.page.html',
  styleUrls: ['./wash-payment-page4.page.scss'],
})
export class WashPaymentPage4Page {

  constructor(
    private router: Router,
  ) { }

  pay() {
    this.router.navigateByUrl('/wash-payment-status2');
  }

}
