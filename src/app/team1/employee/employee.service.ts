import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Users } from './users';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl =environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

public getUser(): Observable<Users[]> {
  return this.http.get<Users[]>(`${this.apiServerUrl}/user/all`);
}

public addUser(user: Users): Observable<Users> {
  return this.http.post<Users>(`${this.apiServerUrl}/user/add`, user);
}

public updateUser(user: Users): Observable<Users> {
  return this.http.put<Users>(`${this.apiServerUrl}/user/update/${user.id}`, user);
}

public deleteUser(userId: number): Observable<void> {
  return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`);
}
// edit
public moveEmployee(user: Users): Observable<Users> {
  return this.http.put<Users>(`${this.apiServerUrl}/user/move/${user.id}`, user);
}
}
