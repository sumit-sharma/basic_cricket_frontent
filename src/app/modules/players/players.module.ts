import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersComponent } from './players.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PlayersComponent,
    children: [
      {path:'', redirectTo: 'players', pathMatch: 'full'},
      {
        path: 'players',
        loadChildren: ()=> import('./players-list/players-list.module').then(m => m.PlayersListModule)
      }
    ]
  }

]

@NgModule({
  declarations: [PlayersComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayersModule { }
