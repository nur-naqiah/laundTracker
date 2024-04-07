import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WashPaymentPage2Page } from './wash-payment-page2.page';

describe('WashPaymentPage1Page', () => {
  let component: WashPaymentPage2Page;
  let fixture: ComponentFixture<WashPaymentPage2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WashPaymentPage2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
