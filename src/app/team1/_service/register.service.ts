import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import { Register } from '../_model/register.model';
import {BehaviorSubject, Observable} from 'rxjs';
@Injectable()
export class RegisterService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  register(register: Register): Observable<Register> {
    const url =`${environment.apiBaseUrl}/register`;
    return this.http.post<Register>(url, register);
}


}















