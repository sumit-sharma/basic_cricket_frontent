import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PlayersListComponent } from './players-list.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', component: PlayersListComponent}
]


@NgModule({
  declarations: [PlayersListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PlayersListModule { }
