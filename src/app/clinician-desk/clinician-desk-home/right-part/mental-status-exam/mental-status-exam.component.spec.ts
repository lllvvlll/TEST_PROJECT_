import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentalStatusExamComponent } from './mental-status-exam.component';

describe('MentalStatusExamComponent', () => {
  let component: MentalStatusExamComponent;
  let fixture: ComponentFixture<MentalStatusExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentalStatusExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentalStatusExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
