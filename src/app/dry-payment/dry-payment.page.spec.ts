import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DryPaymentPage } from './dry-payment.page';

describe('DryPaymentPage', () => {
  let component: DryPaymentPage;
  let fixture: ComponentFixture<DryPaymentPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DryPaymentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
