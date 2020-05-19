import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
let ContactService = class ContactService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_BASE_URL = "http://localhost/api/v0";
    }
    handleError(operation = 'operation', result) {
        return (error) => {
            console.error(error);
            console.log(error.status);
            return of(result);
        };
    }
    list_contacts(pangolin_id, type) {
        const access_token = localStorage.getItem('ACCESS_TOKEN');
        var requestOptions = {
            headers: new HttpHeaders().set('Authorization', `Bearer ${access_token}`)
        };
        return this.httpClient.get(`${this.API_BASE_URL}/pangolins/${pangolin_id}/contacts?type=${type}`, requestOptions)
            .pipe(tap(contacts => contacts.map((contact) => { })), catchError(this.handleError('list_contacts', [])));
    }
    add_contact(pangolin_id, contact_id) {
        const access_token = localStorage.getItem('ACCESS_TOKEN');
        var header = {
            headers: new HttpHeaders().set('Authorization', `Bearer ${access_token}`)
        };
        const body = {
            'contact_id': contact_id
        };
        return this.httpClient.post(`${this.API_BASE_URL}/pangolins/${pangolin_id}/contacts`, body, header)
            .pipe(tap((result) => {
        }), catchError(this.handleError('add_contact', {})));
    }
    delete_contact(pangolin_id, contact_id) {
        const access_token = localStorage.getItem('ACCESS_TOKEN');
        var header = {
            headers: new HttpHeaders().set('Authorization', `Bearer ${access_token}`)
        };
        return this.httpClient.delete(`${this.API_BASE_URL}/pangolins/${pangolin_id}/contacts/${contact_id}`, header)
            .pipe(tap((result) => {
        }), catchError(this.handleError('delete_contact', {})));
    }
};
ContactService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], ContactService);
export { ContactService };
//# sourceMappingURL=contact.service.js.map