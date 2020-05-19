import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http'
import { Pangolin } from  '../models/pangolin'
import { JwtResponse } from  '../models/jwt-response'
import { tap, catchError} from  'rxjs/operators'
import { of } from 'rxjs';
import { Observable, BehaviorSubject } from 'rxjs'
import { Contact } from '../models/contact';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  API_BASE_URL = "http://localhost/api/v0"

  constructor(private httpClient: HttpClient) { }

    private handleError<T> (operation = 'operation', result?: T) {
  		return (error: any): Observable<T> => {
    	console.error(error); 
      console.log(error.status)
    	return of(result as T);
  		};
	}	

  list_contacts_old(pangolin_id, type: string): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.API_BASE_URL}/pangolins/${pangolin_id}/contacts?type=${type}`)
      .pipe(
          tap(contacts => contacts.map((contact) => {})),
          catchError(this.handleError('list_contacts', []))
        );
  }

  list_contacts(pangolin_id, type: string): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>(`${this.API_BASE_URL}/pangolins/${pangolin_id}/contacts?type=${type}`)
      .pipe(
          tap(contacts => contacts.map((contact) => {}))
        );
  }

  add_contact(pangolin_id, contact_id): Observable<any> {
    const body = {
      'contact_id': contact_id
    }
    return this.httpClient.post<any>(`${this.API_BASE_URL}/pangolins/${pangolin_id}/contacts`, body)
      .pipe(
          tap((result: any) => {
          }),
          catchError(this.handleError('add_contact', {}))
    );
  }

  delete_contact(pangolin_id, contact_id): Observable<any> {
    return this.httpClient.delete<any>(`${this.API_BASE_URL}/pangolins/${pangolin_id}/contacts/${contact_id}`)
      .pipe(
          tap((result: any) => {
          }),
          catchError(this.handleError('delete_contact', {})
       )
    );
  }
}


