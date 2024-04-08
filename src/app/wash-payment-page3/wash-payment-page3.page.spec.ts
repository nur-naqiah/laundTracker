import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WashPaymentPage3Page } from './wash-payment-page3.page';

describe('WashPaymentPage3Page', () => {
  let component: WashPaymentPage3Page;
  let fixture: ComponentFixture<WashPaymentPage3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WashPaymentPage3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
