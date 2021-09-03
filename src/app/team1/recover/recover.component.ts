import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthenticationService} from '../_service/auth.service';
import {HttpErrorResponse} from '@angular/common/http';


@Component({
  selector: 'app-dashboard',
  templateUrl: 'recover.component.html'
})
export class RecoverComponent implements OnInit {
  recoverForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';
  private key: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    route.params.subscribe(param => this.key = param['key']);
    this.checkKey();
  }

  ngOnInit() {
    this.recoverForm = this.formBuilder.group({
      email: ['', Validators.required]
    });
  }

  get f() {
    return this.recoverForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    if (this.recoverForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.forgot(this.f.email.value);

    this.error = 'Check your email';
    this.loading = false;
  }


  private checkKey(){
    this.authenticationService.checkKey(this.key).subscribe(
      () => {
      }
      , (error: HttpErrorResponse) => {
        this.router.navigate(['/404']);
      }
    );
  }
}
