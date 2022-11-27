import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestDataSource } from "./rest.datasource";
import { JwtHelperService } from "@auth0/angular-jwt";

import { User } from './user.model';
import { TestBed } from "@angular/core/testing";

@Injectable()
export class AuthService {
    user: User;

    constructor(private datasource: RestDataSource) {
        this.user = new User();
    }

    // authenticate(user: User): Observable<any> {
    //     return this.datasource.authenticate(user);
    // }

    authenticate(username: string, password: string): Observable<boolean> {
        return this.datasource.authenticate(username, password);
    }

    get authenticated(): boolean {
        return this.datasource.authToken != null;
    }

    clear() {
        this.datasource.authToken = null!;
    }

    storeUserData(token: any, user: User): void {
        this.datasource.storeUserData(token, user);
    }

    // get authenticated(): boolean {
    //     return this.datasource.loggedIn();
    // }

    logout(): Observable<any> {
        return this.datasource.logout();
    }
}