import {Component} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
// import { RouterModule } from '@angular/router';
import {IconSetService} from '@coreui/icons-angular';
import {freeSet} from '@coreui/icons';
import {LoginModel} from './team1/_model/Login.model';
import {AuthenticationService} from './team1/_service/auth.service';

@Component({
  // tslint:disable-next-line,'<router-outlet></router-outlet>',
  // selector: 'app-root',
  selector: 'body',
  template: '<router-outlet></router-outlet>',

  providers: [IconSetService],
})
export class AppComponent {
  user: LoginModel;
  constructor(
    private router: Router,
    private authentication: AuthenticationService,
    public iconSet: IconSetService
  ) {
    // iconSet singleton
    iconSet.icons = {...freeSet};
    this.authentication.currentUserLogin.subscribe(x => this.user = x);
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
