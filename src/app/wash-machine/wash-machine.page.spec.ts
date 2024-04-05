import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WashMachinePage } from './wash-machine.page';

describe('WashMachinePage', () => {
  let component: WashMachinePage;
  let fixture: ComponentFixture<WashMachinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(WashMachinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
