import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DryTimerPage } from './dry-timer.page';

describe('DryTimerPage', () => {
  let component: DryTimerPage;
  let fixture: ComponentFixture<DryTimerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DryTimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
