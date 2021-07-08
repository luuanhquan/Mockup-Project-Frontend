import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';


import { DashboardComponent } from './dashboard/dashboard.component';
import {EmployeeComponent} from './employee/employee.component';
import {IssueComponent} from './issue/issue.component';
import {LoginComponent} from './login/login.component';
import {ProjectComponent} from './project/project.component';
import {RegisterComponent} from './register/register.component';
import {RequestComponent} from './request/request.component';


// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { NavbarsComponent } from './navbars/navbars.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    BaseRoutingModule
  ],
  declarations: [DashboardComponent,
    EmployeeComponent,
    LoginComponent,
    IssueComponent,
    ProjectComponent,
    IssueComponent,
    LoginComponent,
    RequestComponent,
    RegisterComponent,
    NavbarsComponent,
  ]
})
export class BaseModule {
}
