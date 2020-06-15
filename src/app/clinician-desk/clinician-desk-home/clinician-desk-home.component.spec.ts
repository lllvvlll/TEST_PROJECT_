import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianDeskHomeComponent } from './clinician-desk-home.component';

describe('ClinicianDeskHomeComponent', () => {
  let component: ClinicianDeskHomeComponent;
  let fixture: ComponentFixture<ClinicianDeskHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianDeskHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianDeskHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
