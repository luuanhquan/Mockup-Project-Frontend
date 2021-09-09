import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from './users';
import {environment} from '../../../environments/environment';
import { Usersfull } from './users1';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getUser(): Observable<Users[]> {
    return this.http.get<Users[]>(`${this.apiServerUrl}/user/all`);
  }

  public addUser(userfull: Usersfull): Observable<Usersfull> {
    return this.http.post<Usersfull>(`${this.apiServerUrl}/user/add`, userfull);
  }

  public updateUser(userfull: Usersfull): Observable<Usersfull> {
    return this.http.put<Usersfull>(`${this.apiServerUrl}/user/update/${userfull.id}`, userfull);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`);
  }

// edit
  public moveEmployee(user: Users): Observable<Users> {
    return this.http.put<Users>(`${this.apiServerUrl}/user/move/${user.id}`, user);
  }
}
