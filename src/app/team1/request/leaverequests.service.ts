import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LeaveRequests } from './leaverequests';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class LeaveRequestService {
  private apiServerUrl =environment.apiBaseUrl;
  constructor(private http: HttpClient) { }
  ///xem
    public getLeaveRequests(): Observable<LeaveRequests[]> {
      return this.http.get<LeaveRequests[]>(`${this.apiServerUrl}/leaverequest/list`);

    }
    //tao
 public addNewRequest(leaveRequests: LeaveRequests): Observable<LeaveRequests> {
    return this.http.post<LeaveRequests>(`${this.apiServerUrl}/leaverequest/add`, leaveRequests);
  }
//// chap nhan
  public approveRequest(leaveRequests: LeaveRequests): Observable<LeaveRequests> {
    return this.http.put<LeaveRequests>(`${this.apiServerUrl}/leaverequest/{id}/true`, leaveRequests);
  }
  public refuseRequest(leaveRequests: LeaveRequests): Observable<LeaveRequests> {
    return this.http.put<LeaveRequests>(`${this.apiServerUrl}/leaverequest/{id}/false`, leaveRequests);
  }



  ///---------------thu hoi
  public cancelRequest (id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiServerUrl}/leaverequest/${id}/cancel`);
  }
}
