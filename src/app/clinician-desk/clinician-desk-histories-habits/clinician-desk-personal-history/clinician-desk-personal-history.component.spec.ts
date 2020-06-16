import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianDeskPersonalHistoryComponent } from './clinician-desk-personal-history.component';

describe('ClinicianDeskPersonalHistoryComponent', () => {
  let component: ClinicianDeskPersonalHistoryComponent;
  let fixture: ComponentFixture<ClinicianDeskPersonalHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianDeskPersonalHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianDeskPersonalHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
