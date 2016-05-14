import { Injectable } from '@angular/core';
import { Planets } from './planets.model';

@Injectable()
export class PlanetsService {

  constructor() {}
  getPlanets(): Promise<Planets[]>{
    return Promise.resolve(PLANETSDATA);
  }
}

const PLANETSDATA: Planets[] = [
  {position: 1, name: 'Mercury',distanceFromSun: 58,description: '88 earth days to orbit the sun' },
  {position: 2, name: 'Venus',distanceFromSun: 108,  description: '225 earth days to orbit the sun' },
  {position: 3, name: 'Earth',distanceFromSun: 150,  description: '365 earth days to orbit the sun' },
  {position: 4, name: 'Mars',distanceFromSun: 228,  description: '686 earth days to orbit the sun' },
  {position: 5, name: 'Jupiter',distanceFromSun: 778,  description: '12 earth years to orbit the sun' },
  {position: 6, name: 'Saturn',distanceFromSun: 886,  description: '29 earth years to orbit the sun' },
  {position: 7, name: 'Uranus',distanceFromSun: 1800,  description: '84 earth years to orbit the sun' },
  {position: 8, name: 'Neptune',distanceFromSun: 2800,  description: '165 earth years to orbit the sun' }
];