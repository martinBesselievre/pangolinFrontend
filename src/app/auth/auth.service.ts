import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Pangolin } from  '../models/pangolin'
import { JwtResponse } from  '../models/jwt-response'
import { tap, catchError } from  'rxjs/operators'
import { Observable, BehaviorSubject, Subject, throwError } from 'rxjs'
import { JwtHelperService } from '@auth0/angular-jwt'

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  API_BASE_URL = "http://localhost/api/v0"
  authSubject:Subject<any>  =  new BehaviorSubject<any>({"status":false})
  helper = new JwtHelperService();

  constructor(private httpClient: HttpClient) { }

  

  loadProfile(pangolin_id: string): Observable<any> {
    return this.httpClient.get<any>(`${this.API_BASE_URL}/pangolins/${pangolin_id}`).pipe(
      tap((res:  any ) => {
      })
    );
  }

  updateProfile(pangolin: Pangolin): Observable<any> {
    const pangolin_id = localStorage.getItem('USERID')
    return this.httpClient.put<any>(`${this.API_BASE_URL}/pangolins/${pangolin_id}`, pangolin).pipe(
      tap((res:  any ) => {
      })
    );
  }

  register(pangolin: Pangolin): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.API_BASE_URL}/register`, pangolin).pipe(
      tap((res:  any ) => {
        if (res.pangolin) {
          console.log('REGISTER')
          console.log(res.pangolin)
          localStorage.setItem("USERID", res.pangolin.id)
          localStorage.setItem("USERNAME", res.pangolin.name)
          localStorage.setItem("LAT", res.pangolin.lat)
          localStorage.setItem("LNG", res.pangolin.lng)
          localStorage.setItem("ACCESS_TOKEN", res.pangolin.access_token)
          localStorage.setItem("EXPIRES_IN", res.pangolin.expires_in)
          this.authSubject.next({"username": localStorage.getItem('USERNAME')})
        }
      })
    );
  }

  login(pangolin: Pangolin): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.API_BASE_URL}/login`, pangolin).pipe(
      tap((res:  any ) => {
        if (res.pangolin) {
          localStorage.setItem("USERID", res.pangolin.id)
          localStorage.setItem("USERNAME", res.pangolin.name)
          localStorage.setItem("LAT", res.pangolin.lat)
          localStorage.setItem("LNG", res.pangolin.lng)
          localStorage.setItem("ACCESS_TOKEN", res.pangolin.access_token)
          localStorage.setItem("EXPIRES_IN", res.pangolin.expires_in)
          this.authSubject.next({"username": localStorage.getItem('USERNAME')})
        }
      }));
  }

  getToken(): string {
    return localStorage.getItem('ACCESS_TOKEN');
  }

  getUser() {
      const token = this.getToken();
      if (token == null) {
        return false
      }
      return !this.helper.isTokenExpired(token)
  };

  isAuthenticated() {
    this.getUser() && this.authSubject.next({"username": localStorage.getItem('USERNAME')});
    !this.getUser() && this.authSubject.next({});
    return this.authSubject.asObservable();
  }

  logout() {
     localStorage.removeItem("USERID")
  	 localStorage.removeItem("USERNAME")
     localStorage.removeItem("LAT")
     localStorage.removeItem("LNG")
     localStorage.removeItem("ACCESS_TOKEN")
     localStorage.removeItem("EXPIRES_IN")
     this.authSubject.next({})
  }

}