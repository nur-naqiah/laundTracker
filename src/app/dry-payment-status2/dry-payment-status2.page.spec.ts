import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DryPaymentStatus2Page } from './dry-payment-status2.page';

describe('DryPaymentStatus2Page', () => {
  let component: DryPaymentStatus2Page;
  let fixture: ComponentFixture<DryPaymentStatus2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DryPaymentStatus2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
