import { TestBed } from '@angular/core/testing';

import { MissionDriverService } from './mission-driver.service';

describe('MissionDriverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissionDriverService = TestBed.get(MissionDriverService);
    expect(service).toBeTruthy();
  });
});
