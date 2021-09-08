import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../_model/user';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  ///xem
  public getProfile(): Observable<User[]> {
    return this.http.get<User[]>(`${this.apiServerUrl}/user/profile/`);

  }

//// Put Profile
  // public updateProfile(user: User): Observable<User> {
  //   return this.http.put<User>(`${this.apiServerUrl}/user/profile/update`, user);
  // }

  public getUser(id: number): Observable<any>{
    return this.http.get(`http://localhost:8888/user/profile/${id}`);

  }
  public updateProfile(formData: any): Observable<any>{
    return this.http.put<User>(`${this.apiServerUrl}/user/profile/update`, formData);
  }
}
