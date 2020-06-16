import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianDeskPastSubstanceUseHistoryComponent } from './clinician-desk-past-substance-use-history.component';

describe('ClinicianDeskPastSubstanceUseHistoryComponent', () => {
  let component: ClinicianDeskPastSubstanceUseHistoryComponent;
  let fixture: ComponentFixture<ClinicianDeskPastSubstanceUseHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianDeskPastSubstanceUseHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianDeskPastSubstanceUseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
