import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateConductorComponent } from './create-conductor.component';

describe('CreateConductorComponent', () => {
  let component: CreateConductorComponent;
  let fixture: ComponentFixture<CreateConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
