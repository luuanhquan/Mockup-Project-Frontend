import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from "rxjs/operators";
import {Observable, of} from "rxjs";
import {LeaveRequests} from '../_model/leaverequests';
import {environment} from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {

  private apiServerUrl = environment.apiBaseUrl;
  constructor(private http: HttpClient) {
  }
  ///get Request
  public getLeaveRequests(): Observable<LeaveRequests[]> {
    return this.http.get<LeaveRequests[]>(`${this.apiServerUrl}/request`).pipe(
      catchError(_ => of(null))
    );

 }
  //Post add
  public addNewRequest(leaveRequests: LeaveRequests): Observable<LeaveRequests> {
    return this.http.post<LeaveRequests>(`${this.apiServerUrl}/request/add`, leaveRequests).pipe(
         catchError(_ => of(null))
    );
  }


//Get  page
  getPage(page = 1, size = 5): Observable<any> {
    return this.http.get(`${this.apiServerUrl}?page=${page}&size=${size}`).pipe();
}
//Patch cancel
cancel(id): Observable<LeaveRequests> {
  return this.http.patch<LeaveRequests>(`${this.apiServerUrl}/request/cancel/${id}`, null).pipe(
      catchError(_ => of(null))
  );
}
//Put Approved
approved(id): Observable<LeaveRequests> {
  return this.http.put<LeaveRequests>(`${this.apiServerUrl}/request/approved/${id}`, null).pipe(
      catchError(_ => of(null))
  );
}
//Put Denied
denied(id): Observable<LeaveRequests> {
  return this.http.put<LeaveRequests>(`${this.apiServerUrl}/request/denied/${id}`, null).pipe(
      catchError(_ => of(null))
  );
}
}
