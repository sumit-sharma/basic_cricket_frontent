import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayersService } from 'src/app/services/players.service';


@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {
public teamId;
public players = [];
public errorMsg = "something went wrong";
@Output() public childEvent = new EventEmitter();
  constructor(private route: ActivatedRoute, private _players: PlayersService) { }

  ngOnInit(): void {
    let id = parseInt(this.route.snapshot.paramMap.get('id'));
    this.teamId = id;

    this._players.getPlayer()
    .subscribe(data => this.players = data,
      error => this.errorMsg = error);

      console.log(this.players)
  }
 
}
