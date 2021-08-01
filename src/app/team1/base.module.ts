import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';


<<<<<<< Updated upstream
=======

>>>>>>> Stashed changes
import { DashboardComponent } from './dashboard/dashboard.component';
import {EmployeeComponent} from './employee/employee.component';
import {IssueComponent} from './issue/issue.component';
import {LoginComponent} from './login/login.component';
import {ProjectComponent} from './project/project.component';
import {RegisterComponent} from './register/register.component';
import {RequestComponent} from './request/request.component';
<<<<<<< Updated upstream

=======
import {ProfileComponent} from './profile/profile.component';
>>>>>>> Stashed changes

// Tabs Component
import { TabsModule } from 'ngx-bootstrap/tabs';
// Components Routing
import { BaseRoutingModule } from './base-routing.module';
import { NavbarsComponent } from './navbars/navbars.component';
<<<<<<< Updated upstream

=======
import { ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
>>>>>>> Stashed changes

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    TabsModule,
<<<<<<< Updated upstream
    BaseRoutingModule
=======
    BaseRoutingModule,
    ReactiveFormsModule
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
    NavbarsComponent,
=======
    ProfileComponent,
    NavbarsComponent,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
>>>>>>> Stashed changes
  ]
})
export class BaseModule {
}
