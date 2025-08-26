import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { User } from '../types/UserAuth';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceAdmin {
  private baseUrl = "http://localhost:8080/api/admin"

  constructor(private http: HttpClient){}

  getToken(): string | null{
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('token');
    }
    return null;
  }

  getUser(id : bigint): Observable<User>{
    return this.http.get<User>(this.baseUrl + '/user/' + id)
  }

}
