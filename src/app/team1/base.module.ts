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
import { CollapseModule } from 'ngx-bootstrap/collapse';


// Collapse Component

// Dropdowns Component
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
    BaseRoutingModule,
    CollapseModule
  ],
  declarations: [DashboardComponent,
    EmployeeComponent,
    EmployeeComponent,
    IssueComponent,
    ProjectComponent,
    IssueComponent,
    ReportComponent,
    RegisterComponent,
    NavbarsComponent,
    ReportComponent
  ]
})


export class BaseModule {
}
