import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

export type User = {
  email: string;
  password: string;
};

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = "http://localhost:8080/api/public";

  constructor(private http: HttpClient) {}

  // --- REGISTER ---
  register(user: User): Observable<{ accessToken: string | null }> {
    return this.http.post<{ accessToken: string }>(`${this.baseUrl}/register`, user).pipe(
      tap(res => {
        if (res.accessToken) {
          localStorage.setItem('token', res.accessToken);
        }
      }),
      catchError(err => {
        console.error('Register failed:', err.message);
        return of({ accessToken: null });
      })
    );
  }

  // --- LOGIN (pour rappel) ---
  login(credentials: Pick<User, 'email' | 'password'>): Observable<{ accessToken: string | null }> {
    return this.http.post<{ accessToken: string }>(`${this.baseUrl}/login`, credentials).pipe(
      tap(res => {
        if (res.accessToken) {
          localStorage.setItem('token', res.accessToken);
        }
      }),
      catchError(err => {
        console.error('Login failed:', err.message);
        return of({ accessToken: null });
      })
    );
  }

  getToken(): string | null {
    if (typeof window !== 'undefined' && window.localStorage) {
      return localStorage.getItem('token');
    }
    return null;
  }
}
