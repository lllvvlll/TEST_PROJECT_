import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendedFallRiskAssesmentComponent } from './attended-fall-risk-assesment.component';

describe('AttendedFallRiskAssesmentComponent', () => {
  let component: AttendedFallRiskAssesmentComponent;
  let fixture: ComponentFixture<AttendedFallRiskAssesmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendedFallRiskAssesmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendedFallRiskAssesmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
