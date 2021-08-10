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
    this.userLogin = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('user')));
    this.currentUserLogin = this.userLogin.asObservable();
  }

  public get userValue(): LoginModel {
    return this.userLogin.value;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("user");
    return !(user === null);
  }


  login(username: string, password: string):Observable<any> {

    return this.http.post<any>(`${environment.apiBaseUrl}/auth`,{username,password})
      .pipe(map(user => {
        let newUser: LoginModel=new LoginModel();
        newUser.username=username;
        newUser.jwtToken=user.jwtToken;
        newUser.role=user.role.replace("[",'').replace("]",'');
        this.userLogin.next(newUser);
        localStorage.setItem('user', JSON.stringify(newUser));
        console.log(newUser)
        this.userLogin.next(user);
        return user;
      })
    );
  }


  logout() {
    localStorage.removeItem('user');
    this.userLogin.next(null);
    this.router.navigate(['/dashboard']);
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
