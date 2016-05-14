import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { OurPlanetsAppComponent } from '../app/our-planets.component';

beforeEachProviders(() => [OurPlanetsAppComponent]);

describe('App: OurPlanets', () => {
  it('should create the app',
      inject([OurPlanetsAppComponent], (app: OurPlanetsAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'our-planets works!\'',
      inject([OurPlanetsAppComponent], (app: OurPlanetsAppComponent) => {
    expect(app.title).toEqual('our-planets works!');
  }));
});
