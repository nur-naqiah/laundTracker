import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WashPaymentStatus2Page } from './wash-payment-status2.page';

describe('WashPaymentStatus2Page', () => {
  let component: WashPaymentStatus2Page;
  let fixture: ComponentFixture<WashPaymentStatus2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WashPaymentStatus2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
