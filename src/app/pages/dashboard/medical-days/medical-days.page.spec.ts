import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalDaysPage } from './medical-days.page';

describe('MedicalDaysPage', () => {
  let component: MedicalDaysPage;
  let fixture: ComponentFixture<MedicalDaysPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MedicalDaysPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalDaysPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
