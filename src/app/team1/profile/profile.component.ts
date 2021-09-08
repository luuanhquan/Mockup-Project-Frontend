import {Component, OnInit} from '@angular/core';
import {HttpErrorResponse} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { User } from '../_model/user';
import {ProfileService} from '../_service/profile.service';
import { AuthenticationService } from '../_service/auth.service';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']

})
export class ProfileComponent implements OnInit {

  profile_form: FormGroup;
  id: any;
  username:any;
  email:any;
  phone:any;
  type: any;
  avatar:any;
  personalid: any;
  firstname:any;
  middlename:any;
  lastname:any;
  gender: any;
  hometown:any;
  birthday: any;
  education:any;
  school:any;
  major:any;
  profileUser:any
 user = new User();


  constructor(private profileService: ProfileService,
    private authService: AuthenticationService,
    private router: Router
    ) {
      this.id = this.authService.getUsers().id;
  }

  ngOnInit() {

      this.username = localStorage.getItem("userName");
    this.email = localStorage.getItem("email");
    this.profileService.getUser(this.id)
      .subscribe(data => {
        console.log(data)// format dob ở đây

        this.birthday = new Date().toLocaleDateString();
        this.firstname = this.user.firstname,
        this.lastname = this.user.lastname,
        this.middlename = this.user.middlename,
        this.education = this.user.education,
        this.school = this.user.school,
        this.major = this.user.major,
        this.type = this.user.type,
        this.hometown = this.user.hometown,
        this.personalid = this.user.personalid,
        this.phone = this.user.phone,
        this.avatar= this.user.avatar,
        this.gender= this.user.gender


        this.profileUser = data;

      }, error => console.log(error));
  }

  public editProfile() {
    this.router.navigate(['update']);
  }

}



