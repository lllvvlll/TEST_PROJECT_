import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianDeskMedicalHistoryComponent } from './clinician-desk-medical-history.component';

describe('ClinicianDeskMedicalHistoryComponent', () => {
  let component: ClinicianDeskMedicalHistoryComponent;
  let fixture: ComponentFixture<ClinicianDeskMedicalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianDeskMedicalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianDeskMedicalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
