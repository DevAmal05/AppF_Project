import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConductorDetailsComponent } from './conductor-details.component';

describe('ConductorDetailsComponent', () => {
  let component: ConductorDetailsComponent;
  let fixture: ComponentFixture<ConductorDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConductorDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConductorDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
