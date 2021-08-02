import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../service/auth.service';
import {LoginModel} from '../model/Login.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  user: LoginModel;
  password: string;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
  }

  ngOnInit() {
    this.authenticationService.currentUserLogin.subscribe(user => this.user = user);
  }

  handleLogin() {
    this.authenticationService.authenticationService(this.user.username, this.password).subscribe((result) => {
      this.router.navigate(['/dashboard']);
    }, () => {
    });
  }
}
