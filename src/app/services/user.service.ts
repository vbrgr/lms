import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private router: Router,
              private jwtHelper: JwtHelperService) { }
  register(data) {
    /* return this._http.post('/api/user/register', data)
       .map(res => {
         if (res.json().errorMessage) {
          return res.json();
         } else {
        return  res.json();
         }
        }).catch(this._handleError); */

  }
  update(data) {
   /*  return this.http.post('/api/user/update', data)
       .map(res => {
         if (res.json().errorMessage) {
          return res.json();
         } else {
        return  res.json();
         }
        }).catch(this._handleError); */
  }
  delete(id) {
   /*  return this.http.delete('/api/userdelete/' + id)
    .map(res => {
      if (res.json().errorMessage) {
       return res.json();
      } else {
     return  res.json();
      }
     }).catch(this._handleError); */
  }
  getUsers() {
    return this.http.get('/api/getusers/')
    .map(res => {
      const result =  res;
      return result;
    });
  }
  getUsersCountBytype() {
    return this.http.get('/api/getusers/CountType/')
    .map(res => {
      const result =  res;
      console.log(res);
      return result;
    });
  }
  getUsersByEmail(email, id) {
    return this.http.get('/api/emailfetch/' + email + '/' + id)
    .map(res => {
      const result =  res;
      return result;
    });
  }
  getUsersById(id) {
    return this.http.get('/api/iduser/' + id)
    .map(res => {
      const result =  res;
      return result;
    });
  }
  getLoginUserDetails() {
    const token = localStorage.getItem('currentUserToken');
    const decodedToken = this.jwtHelper.decodeToken(token);
    const result =  decodedToken;
    return result;
  }
  public _handleError(err) {
    console.error('Error Raised....' + err);
    return Observable.throwError(err || 'Internal Server Error');
  }
}
