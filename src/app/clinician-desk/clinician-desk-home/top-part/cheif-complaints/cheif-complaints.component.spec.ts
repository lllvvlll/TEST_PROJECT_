import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheifComplaintsComponent } from './cheif-complaints.component';

describe('CheifComplaintsComponent', () => {
  let component: CheifComplaintsComponent;
  let fixture: ComponentFixture<CheifComplaintsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheifComplaintsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheifComplaintsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
