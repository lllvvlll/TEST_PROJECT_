import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClinicianDeskTabsComponent } from './clinician-desk-tabs.component';

describe('ClinicianDeskTabsComponent', () => {
  let component: ClinicianDeskTabsComponent;
  let fixture: ComponentFixture<ClinicianDeskTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClinicianDeskTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClinicianDeskTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
