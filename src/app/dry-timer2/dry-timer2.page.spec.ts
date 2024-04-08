import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DryTimer2Page } from './dry-timer2.page';

describe('DryTimer2Page', () => {
  let component: DryTimer2Page;
  let fixture: ComponentFixture<DryTimer2Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DryTimer2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
