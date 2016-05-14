import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { PlanetsService } from './planets.service';

describe('Planets Service', () => {
  beforeEachProviders(() => [PlanetsService]);

  it('should ...',
      inject([PlanetsService], (service: PlanetsService) => {
    expect(service).toBeTruthy();
  }));
});
