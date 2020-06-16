import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AxisDiagnosisComponent } from './axis-diagnosis.component';

describe('AxisDiagnosisComponent', () => {
  let component: AxisDiagnosisComponent;
  let fixture: ComponentFixture<AxisDiagnosisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AxisDiagnosisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AxisDiagnosisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
