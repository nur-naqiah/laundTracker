import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WashPaymentStatusPage } from './wash-payment-status.page';

describe('WashPaymentStatusPage', () => {
  let component: WashPaymentStatusPage;
  let fixture: ComponentFixture<WashPaymentStatusPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WashPaymentStatusPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
