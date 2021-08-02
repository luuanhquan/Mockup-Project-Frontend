import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Project} from '../model/project';
import {Observable} from 'rxjs';
import {Project2} from '../model/project2';


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

  public createProject(project: Project2): Observable<Project2> {
    return this.http.post<Project2>(`${this.apiServerUrl}/project/create-pj`, project);
  }

  // public deleteProject(project: Project): Observable<Project>{

  // }
}
