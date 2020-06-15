import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeMedicationsModalComponent } from './home-medications-modal.component';

describe('HomeMedicationsModalComponent', () => {
  let component: HomeMedicationsModalComponent;
  let fixture: ComponentFixture<HomeMedicationsModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMedicationsModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeMedicationsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
