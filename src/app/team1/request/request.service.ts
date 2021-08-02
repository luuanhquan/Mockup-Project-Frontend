import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
// import { Users } from '../employee/users';
import {Project} from './project.model'
import { Request } from './request';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
 
    private apiServerUrl =environment.apiBaseUrl;
    constructor(private http: HttpClient) { }
  
  public getReport(projectId:number): Observable<Request[]> {
    return this.http.get<Request[]>(`${this.apiServerUrl}/all/report/${projectId}`);
  }
  public  readReport(report: Request): Observable<Request> {
    return this.http.put<Request>(`${this.apiServerUrl}/all/update/${report.id}`, report);
  }

  public getProject():Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/project/all`);
  }
  
//   public getReportDetails(): Observable<>
// /report/{id}
  

}

