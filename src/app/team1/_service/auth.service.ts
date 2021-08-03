import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';
import {LoginModel} from '../_model/Login.model';
import {BehaviorSubject, Observable} from 'rxjs';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private userLogin: BehaviorSubject<LoginModel>;
  public currentUserLogin: Observable<LoginModel>;

  constructor(
    private http: HttpClient,
    private router: Router)
  {
    this.userLogin = new BehaviorSubject<LoginModel>(JSON.parse(localStorage.getItem('user')));
    this.currentUserLogin = this.userLogin.asObservable();
  }

  public get userValue(): LoginModel {
    return this.userLogin.value;
  }


  login(username: String, password: String):Observable<any> {

    return this.http.post<LoginModel>(`${environment.apiBaseUrl}/auth`,{username,password})
      .pipe(map(user => {
        user.authdata = window.btoa(username + ':' + password);
        localStorage.setItem('user', JSON.stringify(user));
        this.userLogin.next(user);
        return user;
      })
    );
  }


  logout() {
    localStorage.removeItem('user');
    this.userLogin.next(null);
    // this.router.navigate(['/dashboard']);
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
