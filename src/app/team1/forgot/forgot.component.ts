import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthenticationService} from '../_service/auth.service';
import {LoginModel} from '../_model/Login.model';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'forgot.component.html'
})
export class ForgotComponent implements OnInit {
  forgotForm:FormGroup;
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
    this.forgotForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
    this.returnUrl=this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  get f(){
    return this.forgotForm.controls;
  }

  onSubmit(){
    this.submitted = true;

    if(this.forgotForm.invalid){
      return;
    }

    this.loading= true;
    this.authenticationService.forgot(this.f.email.value);

    alert("Please check your inbox!")
    this.router.navigate(['/']);
    this.loading= false;
  }


}
