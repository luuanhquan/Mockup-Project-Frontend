import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {DashboardComponent} from './dashboard/dashboard.component';
import {EmployeeComponent} from './employee/employee.component';
import {IssueComponent} from './issue/issue.component';
import {ProjectComponent} from './project/project.component';
import {RegisterComponent} from './register/register.component';
import {ReportComponent} from './report/report.component';


import {ProfileComponent} from './profile/profile.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
        data: {
          title: 'Dashboard'
        }
      },
      {
        path: 'employee',
        component: EmployeeComponent,
        data: {
          title: 'Employees'
        }
      },
      {
        path: 'issue/:id',
        component: IssueComponent,
        data: {
          title: 'Issues'
        }
      },
      {
        path: 'project',
        component: ProjectComponent,
        data: {
          title: 'Projects'
        }
      },
      {
        path: 'register',
        component: RegisterComponent,
        data: {
          title: 'Register'
        }
      },
      {

        path: 'profile',
        component: ProfileComponent,
        data: {
          title: 'Profile'
        }
      },
      {
        path: 'request',
        component: ReportComponent,
        data: {
          title: 'Requests'
        }
      },
      {
        path: 'report',
        component: ReportComponent,
        data: {
          title: 'Report'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BaseRoutingModule {
}
