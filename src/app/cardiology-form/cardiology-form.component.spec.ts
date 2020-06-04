import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardiologyFormComponent } from './cardiology-form.component';

describe('CardiologyFormComponent', () => {
  let component: CardiologyFormComponent;
  let fixture: ComponentFixture<CardiologyFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardiologyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardiologyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
