import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianDeskPastPsychriticHistoryComponent } from './clinician-desk-past-psychritic-history.component';

describe('ClinicianDeskPastPsychriticHistoryComponent', () => {
  let component: ClinicianDeskPastPsychriticHistoryComponent;
  let fixture: ComponentFixture<ClinicianDeskPastPsychriticHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianDeskPastPsychriticHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianDeskPastPsychriticHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
