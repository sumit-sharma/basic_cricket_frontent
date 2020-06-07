import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { TeamsService } from 'src/app/services/teams.service';
import { PlayersComponent } from './players/players.component';
import { TeamContainerComponent } from './team-container/team-container.component';
import { PlayersService } from 'src/app/services/players.service';

const routes: Routes = [
  {path: '', component: TeamContainerComponent,
  children: [
    {path: '', redirectTo: 'teams', pathMatch: 'full'},
    {path: 'teams', component: TeamsComponent},
    {path: 'players/:id', component: PlayersComponent}
  ]
}
]


@NgModule({
  declarations: [TeamsComponent, PlayersComponent, TeamContainerComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    HttpClientModule
  ],
  providers: [TeamsService, PlayersService]
})
export class TeamsModule { }
