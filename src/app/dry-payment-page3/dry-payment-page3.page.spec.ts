import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DryPaymentPage3Page } from './dry-payment-page3.page';

describe('DryPaymentPage3Page', () => {
  let component: DryPaymentPage3Page;
  let fixture: ComponentFixture<DryPaymentPage3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DryPaymentPage3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
