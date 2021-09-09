import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { AuthenticationService } from '../_service/auth.service';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import { Register } from '../_model/register.model';




class CustomValidators {
  static passwordContainsNumber(control: AbstractControl): ValidationErrors {
    const regex= /\d/;

    if(regex.test(control.value) && control.value !== null) {
      return null;
    } else {
      return {passwordInvalid: true};
    }
  }

  static passwordsMatch (control: AbstractControl): ValidationErrors {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;

    if((password === confirmPassword) && (password !== null && confirmPassword !== null)) {
      return null;
    } else {
      return {passwordsNotMatching: true};
    }
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  display = 'none';
  modalObject = {};
  errorMessage: string;

  register :Register;
  registerForm: FormGroup;

  constructor(
    private location: Location,
    private authService: AuthenticationService,
    private formBuilder: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      phone: [ null, [ Validators.required]],
      username: [null, [Validators.required]],
      email: [null, [
        Validators.required,
        Validators.email,
        Validators.minLength(6)
      ]],
      password: [null, [
        Validators.required,
        Validators.minLength(3),
        CustomValidators.passwordContainsNumber
      ]],
      confirmPassword: [null, [Validators.required]]
    },{
       validators: CustomValidators.passwordsMatch
    })
    this.modalObject = {
      title: "",
      body: ""
    }
  }

  onSubmit() {
    // if(this.registerForm.invalid) {
    //        return;
    //      }
    //      console.log(this.registerForm.value);
      this.authService.register(this.registerForm.value).subscribe(
      response => {

        this.errorMessage = null;
        this.showModal();
        console.log(response)
      },
      error => {
        this.registerForm.reset();
        if(error.error.message) {
          this.errorMessage = error.error.message;
        } else {
          this.errorMessage = "Unknown error occured, try after some time..";
        }
      }
    )
  }

  displayChange(value) {
    this.display = 'none'
  }

  showModal() {
    this.display = 'block';
    this.modalObject = {
      title: "SignUp Successful",
      body: `Thanks for signing in!.
            Account verification link is sent on your mail id
            ${this.registerForm.value.email}.
            Click on link to activate your account.`
    }



}

}
