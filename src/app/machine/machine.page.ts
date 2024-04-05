import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-machine',
  templateUrl: './machine.page.html',
  styleUrls: ['./machine.page.scss'],
})
export class MachinePage {

  constructor(private router: Router) { }

  navigateTo(page: string) {
    this.router.navigateByUrl(page);
  }
}
