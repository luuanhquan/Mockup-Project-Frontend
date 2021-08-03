import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
// import { Users } from '../employee/users';
import {Project} from '../_model/project.model';
import {ReportModel} from '../_model/report.model';
import {LoginModel} from '../_model/Login.model';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getReport(projectId: number): Observable<ReportModel[]> {
    return this.http.get<ReportModel[]>(`${this.apiServerUrl}/report/${projectId}`);
  }

  public readReport(report: ReportModel): Observable<ReportModel> {
    return this.http.put<ReportModel>(`${this.apiServerUrl}/project/update/${report.id}`,report);
  }

  public getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/project/all`);
  }



//   public getReportDetails(): Observable<>
// /report/{id}


}

