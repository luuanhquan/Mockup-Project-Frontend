import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {map, tap, catchError} from 'rxjs/operators';
import {LoginModel} from '../_model/Login.model';
import {BehaviorSubject, Observable, of, Subject} from 'rxjs';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';
import { Register } from '../_model/register.model';

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


//   register(register: Register): Observable<Register> {
//     const url =`${environment.apiBaseUrl}/register`;
//     return this.http.post<Register>(url, register);
// }

// updateProfile(user: User): Observable<User> {
//   const url = `${environment.apiBaseUrl}/user/profile/update`;
//   return this.http.put<User>(url, user);    }

//   getProfile(id: number): Observable<User> {
//     const url = `${environment.apiBaseUrl}/user/profile/${id}`;
//     return this.http.get<User>(url);
// }

// getEmail(email: string): Observable<User> {
//   const url = `${environment.apiBaseUrl}/user/profile/${email}`;
//   return this.http.get<User>(url);
// }
// getUsers():any{
//   return JSON.parse(localStorage.getItem("user"));
// }



}
