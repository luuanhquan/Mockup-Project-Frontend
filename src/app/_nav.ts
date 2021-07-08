import {INavData} from '@coreui/angular';

export const navItems: INavData[] = [
  {
    name: 'Dashboard',
    url: '/dashboard',
    icon: 'icon-speedometer',
    badge: {
      variant: 'info',
      text: 'NEW'
    }
  },
  {
    name: 'DASHBOARD',
    url: '/team1/dashboard',
    icon: 'icon-pencil'
  },
  {
    name: 'PROJECT',
    url: '/team1/project',
    icon: 'icon-pencil'
  },
  {
    name: 'EMPLOYEE',
    url: '/team1/employee',
    icon: 'icon-pencil'
  },
  {
    name: 'ISSUE',
    url: '/team1/issue',
    icon: 'icon-pencil'
  },
  {
    name: 'REQUEST',
    url: '/team1/request',
    icon: 'icon-pencil'
  }
];
