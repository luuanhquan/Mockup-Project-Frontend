import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';


import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { IssueComponent } from './issue/issue.component';
import { ProjectComponent } from './project/project.component';
import { RegisterComponent } from './register/register.component';
import { ReportComponent } from './report/report.component';
import { IssueDetailComponent } from './issue-detail/issue-detail.component';


// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { NavbarsComponent } from './navbars/navbars.component';
import { ProfileComponent } from './profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


// Collapse Component

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { CollapseModule } from 'ngx-bootstrap/collapse';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    BaseRoutingModule,
    CollapseModule,
    BaseRoutingModule,
    ReactiveFormsModule

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
    NavbarsComponent,
    NavbarsComponent,
    ReportComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA

  ]
})


export class BaseModule {
}
