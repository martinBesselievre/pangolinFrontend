import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';
let AuthService = class AuthService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_BASE_URL = "http://localhost/api/v0";
        this.authSubject = new BehaviorSubject({ "status": false });
        this.helper = new JwtHelperService();
    }
    register(pangolin) {
        return this.httpClient.post(`${this.API_BASE_URL}/register`, pangolin).pipe(tap((res) => {
            if (res.pangolin) {
                localStorage.setItem("USERID", res.pangolin.id);
                localStorage.setItem("USERNAME", res.pangolin.name);
                localStorage.setItem("ACCESS_TOKEN", res.pangolin.access_token);
                localStorage.setItem("EXPIRES_IN", res.pangolin.expires_in);
                this.authSubject.next(true);
            }
        }));
    }
    updateProfile(pangolin) {
        const pangolin_id = localStorage.getItem('ID');
        return this.httpClient.put(`${this.API_BASE_URL}/pangolins/${pangolin_id}`, pangolin).pipe(tap((res) => {
            console.log(res);
        }));
    }
    login(pangolin) {
        return this.httpClient.post(`${this.API_BASE_URL}/login`, pangolin).pipe(tap((res) => {
            if (res.pangolin) {
                localStorage.setItem("USERID", res.pangolin.id);
                localStorage.setItem("USERNAME", res.pangolin.name);
                localStorage.setItem("ACCESS_TOKEN", res.pangolin.access_token);
                localStorage.setItem("EXPIRES_IN", res.pangolin.expires_in);
                this.authSubject.next(true);
            }
        }));
    }
    getToken() {
        return localStorage.getItem('ACCESS_TOKEN');
    }
    getUser() {
        console.log('ACCESS_TOKEN');
        const token = this.getToken();
        if (token == null) {
            return false;
        }
        return !this.helper.isTokenExpired(token);
    }
    ;
    isAuthenticated() {
        console.log('isAuthenticated');
        this.getUser() && this.authSubject.next({ "status": true, "username": localStorage.getItem('USERNAME') });
        !this.getUser() && this.authSubject.next({ "status": false });
        return this.authSubject.asObservable();
    }
    logout() {
        localStorage.removeItem("USERID");
        localStorage.removeItem("USERNAME");
        localStorage.removeItem("ACCESS_TOKEN");
        localStorage.removeItem("EXPIRES_IN");
        this.authSubject.next();
    }
};
AuthService = __decorate([
    Injectable({
        providedIn: 'root'
    })
], AuthService);
export { AuthService };
//# sourceMappingURL=auth.service.js.map