import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticateactionService} from './service';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent  implements OnInit {
  username = '';
  password = '';
  invalidLogin = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticateactionService) {   }

  ngOnInit() {
  }

  handleLogin() {
    this.authenticationService.authenticate(this.username, this.password).subscribe((result) => {
      this.invalidLogin = false;
    }, () => {
      this.invalidLogin = true;
      this.router.navigate(['/dashboard']);
    });
  }
}
