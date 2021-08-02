import {Component, Input, OnInit, Output} from '@angular/core';
import {navItems} from '../../_nav';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../team1/service/auth.service'
import {LoginModel} from '../../model/Login.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit{
  public sidebarMinimized = false;
  public navItems = navItems;
  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
  }

  user:LoginModel ;
  handleLogin(command:String) {
    switch (command) {
      case 'login':
        this.router.navigate(['/login']);
        break;
      case 'logout':
        this.authenticationService.logout();
        break;
      case 'forgot':
        this.router.navigate(['/forgot']);
        break;
      case 'profile':
        this.router.navigate(['/profile']);
        break;
      case 'register':
        this.router.navigate(['/register']);
        break;
    }
  }

  ngOnInit(): void {
    this.authenticationService.currentUserLogin.subscribe(user => this.user=user);
  }
}
