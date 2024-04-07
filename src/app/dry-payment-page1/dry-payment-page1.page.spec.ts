import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DryPaymentPage1Page } from './dry-payment-page1.page';

describe('DryPaymentPage1Page', () => {
  let component: DryPaymentPage1Page;
  let fixture: ComponentFixture<DryPaymentPage1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DryPaymentPage1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
