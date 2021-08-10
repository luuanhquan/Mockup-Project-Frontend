import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../_service/auth.service';
import {LoginModel} from '../_model/Login.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loading = false;
  submitted=false;
  returnUrl:string;
  error = '';

  constructor(
    private formBuilder:FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService) {
    if(this.authenticationService.isUserLoggedIn()){
      this.router.navigate(['/'])
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f(){
    return this.loginForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.invalid){
      return;
    }

    this.loading= true;
    this.authenticationService.login(this.f.username.value, btoa(this.f.password.value))
      .pipe(first())
      .subscribe(
        data=>{
          this.router.navigate([this.returnUrl]);
        },
        error => {
          this.error=error;
          this.loading= false;
        }
      )
  }


}
