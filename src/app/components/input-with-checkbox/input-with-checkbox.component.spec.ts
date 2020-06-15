import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputWithCheckboxComponent } from './input-with-checkbox.component';

describe('InputWithCheckboxComponent', () => {
  let component: InputWithCheckboxComponent;
  let fixture: ComponentFixture<InputWithCheckboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputWithCheckboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputWithCheckboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
