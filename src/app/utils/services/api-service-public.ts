import { HttpClient } from '@angular/common/http';
import {Inject, Injectable, PLATFORM_ID} from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { UserRegister, UserPublic} from '../types/UserPublic';
import {Tournament} from '../types/Tournament';
import {isPlatformBrowser} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class ApiServicePublic {
  private baseUrl = "http://localhost:8080/api/public"

  constructor(private http: HttpClient){}

  // Auth service
  register(user : UserRegister) : Observable<any> {
    return this.http.post<any>( this.baseUrl + "/register", user).pipe(
      catchError(err => {
        console.error('Error:', err)
        return of('');
      })
    )
  }

  login(credentials: Pick<UserRegister, "email" | "password">) : Observable<{token: string}>{
    return this.http.post<{token: string}>(this.baseUrl + "/login", credentials).pipe(
      tap((res) => {
        localStorage.setItem("token", res.token)
      }),
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

  isAuthenticated(): boolean {
    return !!this.getToken();
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
