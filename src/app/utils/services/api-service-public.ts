import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserRegister, UserPublic} from '../types/UserPublic';
import {Tournament} from '../types/Tournament';

@Injectable({
  providedIn: 'root'
})
export class ApiServicePublic {
  private baseUrl = "http://localhost:8080/api/public"

  constructor(private http: HttpClient){}


  // Auth service
  register(user : UserRegister) : Observable<UserRegister> {
    return this.http.post<UserRegister>( this.baseUrl + "/register", user)
  }

  login(credentials: Pick<UserRegister, "email" | "password">) : Observable<{accessToken: string}>{
    return this.http.post<{accessToken: string}>(this.baseUrl + "/login", credentials).pipe(
      tap((res) => localStorage.setItem("token", res.accessToken)),
      catchError(err => {
        console.error(err.message)
        return of()
      })
    )
  }

  getToken(): string | null{
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('token');
    }
    return null;
  }

  getUser(id : bigint): Observable<UserPublic>{
    return this.http.get<UserPublic>(this.baseUrl + '/user/' + id)
  }

  getTournaments() : Observable<Tournament[]>{
    return this.http.get<Tournament[]>(this.baseUrl + '/tournament')
  }

  getTournament(id : bigint) : Observable<Tournament>{
    return this.http.get<Tournament>(this.baseUrl + '/tournament/'+id)
  }

  /*getMatchsByTournament(id : bigint) : */

}
