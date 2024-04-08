import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dry-payment-page4',
  templateUrl: './dry-payment-page4.page.html',
  styleUrls: ['./dry-payment-page4.page.scss'],
})
export class DryPaymentPage4Page {

  constructor(
    private router: Router,
  ) { }

  pay() {
    this.router.navigateByUrl('/dry-payment-status2');
  }

}
