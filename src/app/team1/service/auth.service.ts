import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {LoginModel} from '../model/Login.model';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  userLogin = new BehaviorSubject({
    username: '',
    role: 'guest',
    loggedin: false,
    avartar: 'default'
  });
  currentUserLogin = this.userLogin.asObservable();

  constructor(private http: HttpClient) {
  }

  changeUser(user: LoginModel) {
    this.userLogin.next(user);
  }

  authenticationService(username: String, password: String) {
    return this.http.get<LoginModel>(`http://localhost:8888/auth`,
      {headers: {authorization: this.createBasicAuthToken(username, password)}}).pipe(map(login => {
        login.loggedin = true;
        this.registerSuccessfulLogin(login);
      })
    );
  }

  createBasicAuthToken(username: String, password: String) {
    return 'Basic ' + window.btoa(username + ':' + password);
  }

  registerSuccessfulLogin(login: LoginModel) {
    this.changeUser(login);
    console.log(login);
  }

  logout() {
    this.changeUser({
      username: '',
      role: 'guest',
      loggedin: false,
      avartar: 'default'
    });
  }

  // isUserLoggedIn() {
  //   const user:LoginModel = JSON.parse(sessionStorage.getItem(localStorage.getItem("user")));
  //   return user.loggedin;
  // }
  //
  // getLoggedInUserName() {
  //   const user = JSON.parse(sessionStorage.getItem(localStorage.getItem("user")));
  //   if (user === null) {
  //     return '';
  //   }
  //   return user.username;
  // }
}
