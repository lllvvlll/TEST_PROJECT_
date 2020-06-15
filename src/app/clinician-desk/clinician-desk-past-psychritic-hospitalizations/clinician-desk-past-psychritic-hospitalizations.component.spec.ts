import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianDeskPastPsychriticHospitalizationsComponent } from './clinician-desk-past-psychritic-hospitalizations.component';

describe('ClinicianDeskPastPsychriticHospitalizationsComponent', () => {
  let component: ClinicianDeskPastPsychriticHospitalizationsComponent;
  let fixture: ComponentFixture<ClinicianDeskPastPsychriticHospitalizationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianDeskPastPsychriticHospitalizationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianDeskPastPsychriticHospitalizationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
