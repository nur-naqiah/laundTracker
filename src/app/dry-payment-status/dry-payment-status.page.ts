import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dry-payment-status',
  templateUrl: './dry-payment-status.page.html',
  styleUrls: ['./dry-payment-status.page.scss'],
})
export class DryPaymentStatusPage {

  constructor(
    private router: Router,
  ) { }

  proceed() {
    // Navigate to the appropriate route for getting started
    this.router.navigateByUrl('/dry-timer');
  }

}
