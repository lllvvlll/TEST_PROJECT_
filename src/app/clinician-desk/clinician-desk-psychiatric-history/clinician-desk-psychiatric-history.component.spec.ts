import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianDeskPsychiatricHistoryComponent } from './clinician-desk-psychiatric-history.component';

describe('ClinicianDeskPsychiatricHistoryComponent', () => {
  let component: ClinicianDeskPsychiatricHistoryComponent;
  let fixture: ComponentFixture<ClinicianDeskPsychiatricHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianDeskPsychiatricHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianDeskPsychiatricHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
