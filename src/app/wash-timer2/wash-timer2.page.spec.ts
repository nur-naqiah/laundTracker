import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WashTimer2Page } from './wash-timer2.page';

describe('WashTimer2Page', () => {
  let component: WashTimer2Page;
  let fixture: ComponentFixture<WashTimer2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WashTimer2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
