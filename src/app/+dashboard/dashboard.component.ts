import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Planets, PlanetsService } from '../shared';

@Component({
  moduleId: module.id,
  selector: 'planets-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  planetsList: Planets[] = [];
  constructor(
    private _planetservice: PlanetsService,
    private _router: Router) {}

  ngOnInit() {
    this._planetservice.getPlanets().then(planets => this.planetsList = planets);
  }

}