import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianDeskSurgeriesHospitalizationComponent } from './clinician-desk-surgeries-hospitalization.component';

describe('ClinicianDeskSurgeriesHospitalizationComponent', () => {
  let component: ClinicianDeskSurgeriesHospitalizationComponent;
  let fixture: ComponentFixture<ClinicianDeskSurgeriesHospitalizationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianDeskSurgeriesHospitalizationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianDeskSurgeriesHospitalizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
