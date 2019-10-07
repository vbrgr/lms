import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { UserService } from './user.service';
import { AuthService } from 'angularx-social-login';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private token: string;
  ncredentials: any;
  public loggedInStatus = false;
  constructor(private http: HttpClient, private userServ: UserService,
              private router: Router, public jwtHelper: JwtHelperService) {
  }
  login(credentials) {
    if (credentials.password) {
      this.ncredentials = { 'email': credentials.email, 'password': credentials.password, 'type': 'admin' };
    } else {
      this.ncredentials = credentials;
    }
    return this.http.post('https://my-json-server.typicode.com/vbrgr/lms/users', this.ncredentials).map(res => {
          localStorage.setItem('currentUserToken', res.token);
      });
  }

  getUserDetails() {
    return this.http.get('/api/data');

  }
  /* isLoggedIn(): Observable<IsLoggedIn> {
    return this.http.get('/api/isloggedin').map(res => {
      return res.json();
    });
  } */
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('currentUserToken');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);
  }
  setLoggedIn(value: boolean) {
    this.loggedInStatus = value;
  }

  getCurrentUser(): any {
    const token = localStorage.getItem('currentUserToken');
    return this.http.get('https://my-json-server.typicode.com/vbrgr/lms/users/' + token).map(res => {
      return res;
    });
  }
  saveToken(token: string): any {
    const body = { token };
    // this.token = token;
  }

  getToken(): string {
    return localStorage.getItem('currentUserToken');
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('currentUserToken');
    this.router.navigate(['/']);
  }

  public _handleError(err) {
    console.error('Error Raised....' + err);
    return Observable.throwError(err || 'Internal Server Error');
  }
}
export interface UserDetails {
  _id: string;
  email: string;
  name: string;
  exp: number;
  iat: number;
}

interface TokenResponse {
  token: string;
}
interface IsLoggedIn {
  status: boolean;
}
export interface TokenPayload {
  email: string;
  password: string;
  name: string;
}
