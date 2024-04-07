import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WashPaymentPage1Page } from './wash-payment-page1.page';

describe('WashPaymentPage1Page', () => {
  let component: WashPaymentPage1Page;
  let fixture: ComponentFixture<WashPaymentPage1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WashPaymentPage1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
