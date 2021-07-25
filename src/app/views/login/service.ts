import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
// import {Observable} from 'rxjs/Observable';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class User {
  constructor(
    public id: number,
    public name: string,
    public role: string
  ) {
  }
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticateactionService {

  constructor(private httpClient: HttpClient) {}

  // Uses http.get() to load data from a single API endpoint
  authenticate(username, password) {
    const headers = new HttpHeaders({Authorization: 'Basic ' + btoa(username + '' + password)});
    return this.httpClient.get<User>('http://localhost:8888/auth', {headers}).pipe(
      map(
        userData => {
          sessionStorage.setItem('username', username);
          return userData;
        }
      )
    );
  }

  isUserLoggedIn() {
const user = sessionStorage.getItem('username');
 console.log( !(user === null));
 return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }
}

export class Service {
}
