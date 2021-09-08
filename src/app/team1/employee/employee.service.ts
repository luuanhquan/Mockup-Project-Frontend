import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Users} from './users';
import {environment} from '../../../environments/environment';
import { Usersfull } from './users1';
import { UserDivision } from './userdivision';
import { searchCriteria } from './key';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public search(search:searchCriteria): Observable<Usersfull[]> {
    return this.http.post<Usersfull[]>(`${this.apiServerUrl}/user/search`, search)
  }


  public getfullUser(pageNumber: number): Observable<Usersfull[]> { 
    return this.http.get<Usersfull[]>( `${this.apiServerUrl}/user/all/${pageNumber}`);
  }

// getUserdivision
  public getUserdivision(): Observable<UserDivision[]> { 
    return this.http.get<UserDivision[]>( `${this.apiServerUrl}/user/alluserdivision`);
  }
 
  public addUser(usersfull: Usersfull): Observable<Usersfull> {
    return this.http.post<Usersfull>(`${this.apiServerUrl}/user/add`, usersfull);
  }

  public updateUser(userfull: Usersfull): Observable<Usersfull> {
    return this.http.put<Usersfull>(`${this.apiServerUrl}/user/update/${userfull.id}`, userfull);
  }

  public deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/user/delete/${userId}`);
  }

// edit
  public moveEmployee(userdivision: UserDivision): Observable<UserDivision> {
    return this.http.put<UserDivision>(`${this.apiServerUrl}/user/move/${userdivision.id}`, userdivision);
  }
}
