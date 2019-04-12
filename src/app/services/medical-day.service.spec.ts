import { TestBed } from '@angular/core/testing';

import { MedicalDayService } from './medical-day.service';

describe('MedicalDayService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MedicalDayService = TestBed.get(MedicalDayService);
    expect(service).toBeTruthy();
  });
});
