import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WashTimerPage } from './wash-timer.page';

describe('WashTimerPage', () => {
  let component: WashTimerPage;
  let fixture: ComponentFixture<WashTimerPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WashTimerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
