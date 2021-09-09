import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, tap, catchError} from 'rxjs/operators';
import {LoginModel} from '../_model/Login.model';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import { Register } from '../_model/register.model';
import { User } from '../_model/user';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {


  private userLogin: BehaviorSubject<LoginModel>;
  public currentUserLogin: Observable<LoginModel>;

  constructor(
    private http: HttpClient,
    private router: Router
   )
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
  forgot(email: string) {
    this.http.post<any>(`${environment.apiBaseUrl}/forgot-password/`,email)
      .pipe(map(user => {
          return user;
        })
      );
  }

  checkKey(key: string): Observable<void>  {
    return this.http.get<any>(`${environment.apiBaseUrl}/forgot-password/${key}`);
  }

  register(register: Register): Observable<Register> {
    const url =`${environment.apiBaseUrl}/register`;
    return this.http.post<Register>(url, register);
}

updateProfile(user: User): Observable<User> {
  const url = `${environment.apiBaseUrl}/user/profile/update`;
  return this.http.put<User>(url, user);    }

  getProfile(id: number): Observable<User> {
    const url = `${environment.apiBaseUrl}/user/profile/${id}`;
    return this.http.get<User>(url);
}

getEmail(email: string): Observable<User> {
  const url = `${environment.apiBaseUrl}/user/profile/${email}`;
  return this.http.get<User>(url);
}
getUsers():any{
  return JSON.parse(localStorage.getItem("user"));
}



}
