import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';


import {DashboardComponent} from './dashboard/dashboard.component';
import {EmployeeComponent} from './employee/employee.component';
import {IssueComponent} from './issue/issue.component';
import {ProjectComponent} from './project/project.component';
import {RegisterComponent} from './register/register.component';
import {ReportComponent} from './report/report.component';
import { SettingprofileComponent } from './settingprofile/settingprofile.component';

// Tabs Component
import {TabsModule} from 'ngx-bootstrap/tabs';
// Components Routing
import {BaseRoutingModule} from './base-routing.module';
import {NavbarsComponent} from './navbars/navbars.component';
import {ProfileComponent} from './profile/profile.component';


// Collapse Component
// Dropdowns Component
import {CollapseModule} from 'ngx-bootstrap/collapse';
import {ProgressbarModule} from 'ngx-bootstrap/progressbar';
import {TooltipModule} from 'ngx-bootstrap/tooltip';
import { RequestComponent } from './request/request.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    BaseRoutingModule,
    CollapseModule,
    BaseRoutingModule,
    ReactiveFormsModule,
    ProgressbarModule,
    TooltipModule

  ],
  declarations: [DashboardComponent,
    EmployeeComponent,
    EmployeeComponent,
    IssueComponent,
    ProjectComponent,
    IssueComponent,
    ReportComponent,
    RegisterComponent,
    ProfileComponent,
    RequestComponent,
    NavbarsComponent,
    ReportComponent,
    SettingprofileComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA

  ]
})


export class BaseModule {
}
