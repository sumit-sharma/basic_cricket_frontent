import { Component, OnInit } from '@angular/core';
import { TeamsService } from 'src/app/services/teams.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent implements OnInit {
public teams = [];
public fixture = [];
public errorMsg = "something went wrong";
  constructor(
    private _teams: TeamsService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this._teams.getTeams()
    .subscribe(data => this.teams = data,
      error => this.errorMsg = error);
      this.getFixture()
  }

  onSelect(team){
    this.router.navigate(['/players',team.id])
  }

  getFixture(){
    this._teams.getFixture()
    .subscribe(data => this.fixture = data,
      error => this.errorMsg = error);
  }
}
