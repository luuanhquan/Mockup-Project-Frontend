import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
// import { Users } from '../employee/users';
import {Project} from '../model/project.model'
import { Report } from '../model/report';
import {LoginModel} from '../model/Login.model';
@Injectable({
  providedIn: 'root'
})
export class ReportService{

  private getAuth(){
    let user:LoginModel= JSON.parse(localStorage.getItem("user"));
    return 'Basic ' + window.btoa('quan1' + ':' + '123');
  }
    private apiServerUrl =environment.apiBaseUrl;
    constructor(private http: HttpClient) { }

  public getReport(projectId:number): Observable<Report[]> {
    return this.http.get<Report[]>(`${this.apiServerUrl}/all/report/${projectId}`, {headers: {authorization: this.getAuth()}});
  }
  public  readReport(report: Report): Observable<Report> {
    return this.http.put<Report>(`${this.apiServerUrl}/all/update/${report.id}`, report, {headers: {authorization: this.getAuth()}});
  }

  public getProject():Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/project/all`, {headers: {authorization: this.getAuth()}});
  }

//   public getReportDetails(): Observable<>
// /report/{id}


}

