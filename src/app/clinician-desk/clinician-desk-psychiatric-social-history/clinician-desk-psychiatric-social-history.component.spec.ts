import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianDeskPsychiatricSocialHistoryComponent } from './clinician-desk-psychiatric-social-history.component';

describe('ClinicianDeskPsychiatricSocialHistoryComponent', () => {
  let component: ClinicianDeskPsychiatricSocialHistoryComponent;
  let fixture: ComponentFixture<ClinicianDeskPsychiatricSocialHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianDeskPsychiatricSocialHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianDeskPsychiatricSocialHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
