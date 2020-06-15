import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewOfSystemsComponent } from './review-of-systems.component';

describe('ReviewOfSystemsComponent', () => {
  let component: ReviewOfSystemsComponent;
  let fixture: ComponentFixture<ReviewOfSystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviewOfSystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewOfSystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
