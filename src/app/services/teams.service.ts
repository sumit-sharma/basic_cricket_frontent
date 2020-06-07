import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Teams} from '../interface/teams';
import {Fixture} from '../interface/fixture';
import { Observable, observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {
url = "assets/data/teams.json";
fixtuteUrl ="assets/data/fixture.json"

  constructor(private http: HttpClient) { }

  getTeams(): Observable<Teams[]>{
    return this.http.get<Teams[]>(this.url)
    .pipe(map((data: any) => data.data), 
    catchError(this.errorHandeler))
  }


  getFixture(): Observable<Fixture[]>{
    return this.http.get<Fixture[]>(this.fixtuteUrl)
    .pipe(map((data: any) => data.data), 
    catchError(this.errorHandeler))
  }

  errorHandeler(error: HttpErrorResponse){
    let errorMessage = "server error";
    return throwError(errorMessage)
  }
}
