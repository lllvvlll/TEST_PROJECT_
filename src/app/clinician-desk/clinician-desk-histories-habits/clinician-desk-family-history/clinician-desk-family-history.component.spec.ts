import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianDeskFamilyHistoryComponent } from './clinician-desk-family-history.component';

describe('ClinicianDeskFamilyHistoryComponent', () => {
  let component: ClinicianDeskFamilyHistoryComponent;
  let fixture: ComponentFixture<ClinicianDeskFamilyHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianDeskFamilyHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianDeskFamilyHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
