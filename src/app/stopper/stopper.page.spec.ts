import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StopperPage } from './stopper.page';

describe('StopperPage', () => {
  let component: StopperPage;
  let fixture: ComponentFixture<StopperPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StopperPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StopperPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
