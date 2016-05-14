import { Component } from '@angular/core';
import { DashboardComponent } from './+dashboard';
import { Routes , ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router';
import { PlanetsService } from './shared';

@Component({
  moduleId: module.id,
  selector: 'our-planets-app',
  templateUrl: 'our-planets.component.html',
  styleUrls: ['our-planets.component.css'],
  directives: [ROUTER_DIRECTIVES],
  providers: [ROUTER_PROVIDERS]
})
@Routes([
  {path: '/dashboard', component: DashboardComponent}
])
export class OurPlanetsAppComponent {
  title = 'Welcome to Solar System Planets !!';
}
