import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dry-payment-page2',
  templateUrl: './dry-payment-page2.page.html',
  styleUrls: ['./dry-payment-page2.page.scss'],
})
export class DryPaymentPage2Page {

  constructor(
    private router: Router,
  ) { }

  pay() {
    this.router.navigateByUrl('/dry-payment-status2');
  }

}
