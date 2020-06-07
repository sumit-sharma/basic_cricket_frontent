import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Players} from '../interface/players';
import { Observable, observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {
  url = "assets/data/players.json";
  constructor(private http: HttpClient) { }

  getPlayer(): Observable<Players[]>{
    return this.http.get<Players[]>(this.url)
    .pipe(map((data: any) => data.data.players), 
    catchError(this.errorHandeler));
  }

  errorHandeler(error: HttpErrorResponse){
    let errorMessage = "server error";
    return throwError(errorMessage)
  }
}
