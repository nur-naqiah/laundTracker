import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dry-payment2-status',
  templateUrl: './dry-payment-status2.page.html',
  styleUrls: ['./dry-payment-status2.page.scss'],
})
export class DryPaymentStatus2Page {

  constructor(
    private router: Router,
  ) { }

  proceed() {
    // Navigate to the appropriate route for getting started
    this.router.navigateByUrl('/dry-timer2');
  }

}
