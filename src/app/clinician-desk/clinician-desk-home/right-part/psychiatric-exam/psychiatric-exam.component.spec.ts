import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PsychiatricExamComponent } from './psychiatric-exam.component';

describe('PsychiatricExamComponent', () => {
  let component: PsychiatricExamComponent;
  let fixture: ComponentFixture<PsychiatricExamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PsychiatricExamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PsychiatricExamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
