import { HttpClient } from '@angular/common/http';
import { Component, OnInit, } from '@angular/core';
import { FormBuilder,} from '@angular/forms';
import {  Router } from '@angular/router';
import { User } from '../_model/user';
import { AuthenticationService } from '../_service/auth.service';
import { ProfileService } from '../_service/profile.service';


@Component({
  selector: 'app-settingprofile',
  templateUrl: './settingprofile.component.html',
  styleUrls: ['./settingprofile.component.css']
})
export class SettingprofileComponent implements OnInit {

  constructor(
    private http: HttpClient,
    private router: Router,

    private profileService: ProfileService,
    private oauthService: AuthenticationService,
    private fb: FormBuilder,
  ) {
    this.users = new User();
    this.id = this.oauthService.getUsers().id;
    this.password = this.oauthService.getUsers().password;

}
  password: any;
  id: any;
  users: User;
  ngOnInit() {

    console.log(this.id)

    this.profileService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.users = data;
      }, error => console.log(error));
  }

  selectFile($event){
    this.users.avatar = $event.target.files[0].name;
  }


  public updateProfile():void{
    // debugger
    const formData = new FormData();
    formData.append('avatar', this.users.avatar);
    formData.append('email', this.users.email);
    formData.append('type', this.users.type);
    formData.append('phone', this.users.phone);
    formData.append('gender', this.users.gender);
    formData.append('personalid', this.users.personalid);
    formData.append('hometown', this.users.hometown);
    formData.append('education', this.users.education);
    formData.append('school', this.users.school);
    formData.append('birthday', this.users.birthday);
    formData.append('firstname', this.users.firstname);
    formData.append('lastname', this.users.lastname);
    formData.append('middlename', this.users.middlename);
    formData.append('major', this.users.major);
    console.log(formData);
    if(this.id !== 1){
      formData.append('id', `${this.id}`);
      formData.append('password', `${this.password}`);
    }
    this.profileService.updateProfile(formData).subscribe(
      data =>{
        this.users = data;
        console.log('ok', data);
        alert('ok');
        this.router.navigate(['user/profile']);
      }, (error: any) => {
        alert('Thất bại');
        console.log(error);
      }
    );
  }

}
