import { Injectable, ViewChild } from "@angular/core";
import { environment } from "../../../environments/environment";
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Project } from "./project";
import { Observable } from "rxjs";
import { ModalDirective } from "ngx-bootstrap/modal";


@Injectable({
    providedIn: 'root'
})

export class ProjectService {

    private apiServerUrl =environment.apiBaseUrl;
    constructor (private http: HttpClient) { }
    public getProject(): Observable<Project[]> {
      return this.http.get<Project[]>(`${this.apiServerUrl}/project/list`);
    }
}