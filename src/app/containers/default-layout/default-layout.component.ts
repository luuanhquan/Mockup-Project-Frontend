import {Component, OnInit} from '@angular/core';
import {navItems} from '../../_nav';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../../team1/_service/auth.service';
import {LoginModel} from '../../team1/_model/Login.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public sidebarMinimized = false;
  public navItems = navItems;
  // user: LoginModel;
  // loggedin: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authentication: AuthenticationService
  ) {
    // if(authenticationService.userValue) this.loggedin=true;
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  handleLogin(command: String) {
    switch (command) {
      case 'login':
        this.router.navigate(['/login']);
        break;
      case 'logout':
        this.authentication.logout();
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
    // this.authenticationService.currentUserLogin.subscribe(x=>this.user=x);
      // this.user = {jwtToken:'',role:'',username:''}
  }
}
