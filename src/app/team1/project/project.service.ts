import { Injectable, ViewChild } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Project } from "./project";
import { Observable } from "rxjs";
import { ModalDirective } from "ngx-bootstrap/modal";
import { Project2 } from "./project2";


@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    private apiServerUrl =environment.apiBaseUrl;
    constructor (private http: HttpClient) { }
    public getProject(): Observable<Project[]> {
      return this.http.get<Project[]>(`${this.apiServerUrl}/project/list`);
    };

    public createProject(project:Project2): Observable<Project2>{
      return this.http.post<Project2>(`${this.apiServerUrl}/project/create-pj`,project)
    }
}