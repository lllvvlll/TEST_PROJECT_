import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentPlanAndRecomendationsComponent } from './treatment-plan-and-recomendations.component';

describe('TreatmentPlanAndRecomendationsComponent', () => {
  let component: TreatmentPlanAndRecomendationsComponent;
  let fixture: ComponentFixture<TreatmentPlanAndRecomendationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentPlanAndRecomendationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentPlanAndRecomendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
