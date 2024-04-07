import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DryPaymentStatusPage } from './dry-payment-status.page';

describe('DryPaymentStatusPage', () => {
  let component: DryPaymentStatusPage;
  let fixture: ComponentFixture<DryPaymentStatusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DryPaymentStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
