import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianDeskHomeMedicationsComponent } from './clinician-desk-home-medications.component';

describe('ClinicianDeskHomeMedicationsComponent', () => {
  let component: ClinicianDeskHomeMedicationsComponent;
  let fixture: ComponentFixture<ClinicianDeskHomeMedicationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianDeskHomeMedicationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianDeskHomeMedicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
