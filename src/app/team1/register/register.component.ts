<<<<<<< Updated upstream
import { Component } from '@angular/core';

@Component({
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  constructor() { }


}
=======
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import{

  UsernameValidator,
  PasswordValidator,
  ParentErrorStateMatcher,

} from '../validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {

  register_form: FormGroup;
  matching_passwords: FormGroup;

  constructor() { }

  ngOnInit() {

     // matching passwords validation
    //  this.matching_passwords = new FormGroup({
    //   password: new FormControl('', Validators.compose([
    //     Validators.minLength(5),
    //     Validators.required,
    //     Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]+$')
    //   ])),

    //   confirm_password: new FormControl('', Validators.required)
    // }, (formGroup: FormGroup) => {
    //   return PasswordValidator.areEqual(formGroup);
    // });


    this.register_form = new FormGroup({

      username: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
       ])),


      // 'username' : new FormControl('', Validators.required),
      'email' : new FormControl('', [Validators.required, Validators.email]),
      'phone' : new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),
        // matching_passwords: this.matching_passwords,

        'password': new FormControl ('',[Validators.compose([Validators.required,Validators.minLength(6)])]),



        'confirm_password': new FormControl ('',[Validators.compose([Validators.required,Validators.minLength(6)])]),



    });
    }

    clicksub() {
      console.log(this.register_form.value);
      this.register_form.reset();
    }
    get username() {
      return this.register_form.get('username');
    }
    get email() {
      return this.register_form.get('email');
    }
    get phone() {
      return this.register_form.get('phone');
    }
    get password() {
      return this.register_form.get('password');
    }
    get confirm_password() {
      return this.register_form.get('confirm_password');
    }

    onSubmitRegister(value){
      console.log(value);
    }
  }
>>>>>>> Stashed changes
