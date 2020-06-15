import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianDeskHistoriesHabitsComponent } from './clinician-desk-histories-habits.component';

describe('ClinicianDeskHistoriesHabitsComponent', () => {
  let component: ClinicianDeskHistoriesHabitsComponent;
  let fixture: ComponentFixture<ClinicianDeskHistoriesHabitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianDeskHistoriesHabitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianDeskHistoriesHabitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
