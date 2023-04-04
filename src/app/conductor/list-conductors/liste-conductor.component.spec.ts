import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeConductorComponent } from './liste-conductor.component';

describe('ListeConductorComponent', () => {
  let component: ListeConductorComponent;
  let fixture: ComponentFixture<ListeConductorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeConductorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeConductorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
