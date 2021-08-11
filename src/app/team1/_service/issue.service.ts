import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Project} from '../_model/project';
import {IssueDetailModel} from '../_model/Issue/IssueDetail.model';

@Injectable({
  providedIn: 'root'
})

export class IssueService{

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getIssueDetail(id: number): Observable<IssueDetailModel> {
    return this.http.get<IssueDetailModel>(`${this.apiServerUrl}/issue/${id}`);
  };

}
