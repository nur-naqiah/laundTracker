import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DryPaymentPage2Page } from './dry-payment-page2.page';

describe('DryPaymentPage2Page', () => {
  let component: DryPaymentPage2Page;
  let fixture: ComponentFixture<DryPaymentPage2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DryPaymentPage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
