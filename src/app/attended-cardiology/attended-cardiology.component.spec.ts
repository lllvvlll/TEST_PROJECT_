import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttendedCardiologyComponent } from './attended-cardiology.component';

describe('AttendedCardiologyComponent', () => {
  let component: AttendedCardiologyComponent;
  let fixture: ComponentFixture<AttendedCardiologyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttendedCardiologyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttendedCardiologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
