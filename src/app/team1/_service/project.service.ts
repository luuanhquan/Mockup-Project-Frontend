import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Project} from '../_model/project';
import {Observable} from 'rxjs';
import {Project2Model} from '../_model/project2.model';


@Injectable({
  providedIn: 'root'
})

export class ProjectService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {
  }

  public getProject(): Observable<Project[]> {
    return this.http.get<Project[]>(`${this.apiServerUrl}/project/list`);
  };

  public createProject(project: Project2Model): Observable<Project2Model> {
    return this.http.post<Project2Model>(`${this.apiServerUrl}/project/create-pj`, project);
  }

  // public deleteProject(project: Project): Observable<Project>{

  // }
}
