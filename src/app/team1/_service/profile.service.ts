import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Profile} from '../_model/profile.model';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  ///xem
  public getProfile(): Observable<Profile[]> {
    return this.http.get<Profile[]>(`${this.apiServerUrl}/profile/`);

  }

//// sua
  public updateProfile(profile: Profile): Observable<Profile> {
    return this.http.put<Profile>(`${this.apiServerUrl}/profile/update/`, profile);
  }

}
