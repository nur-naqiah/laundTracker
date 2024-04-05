import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DryMachinePage } from './dry-machine.page';

describe('DryMachinePage', () => {
  let component: DryMachinePage;
  let fixture: ComponentFixture<DryMachinePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DryMachinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
