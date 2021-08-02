import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UsernameValidator,} from '../validators';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']

})
export class RegisterComponent implements OnInit {

  register_form: FormGroup;


  constructor() {
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

  ngOnInit() {


    this.register_form = new FormGroup({

      username: new FormControl('', Validators.compose([
        UsernameValidator.validUsername,
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ])),


      // 'username' : new FormControl('', Validators.required),
      'email': new FormControl('', [Validators.required, Validators.email]),
      'phone': new FormControl(
        null,
        [
          Validators.required,
          Validators.pattern('^\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*$')
        ]),


      'password': new FormControl('', [Validators.compose([Validators.required, Validators.minLength(6)])]),


      'confirm_password': new FormControl('', [Validators.compose([Validators.required, Validators.minLength(6)])]),


    });
  }

  clicksub() {
    console.log(this.register_form.value);
    this.register_form.reset();
  }

  onSubmitRegister(value) {
    console.log(value);
  }
}
