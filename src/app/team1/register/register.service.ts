import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Register } from './register';
import { environment } from '../../../environments/environment';

@Injectable()
export class RegisterService {
  private apiServerUrl =environment.apiBaseUrl;
  constructor(private http: HttpClient) { }

  createAccount(email: string, password: string, phone:string) {
    return this.http.post(this.apiServerUrl + '/register', {
      email,
      password,
     phone
    }, { headers: { 'Content-type': 'application/json; charset=utf-8' } });
  }

  // verifyEmail(verificationToken) {
  //   return this.http.post(this.apiServerUrl + '/register/validate', {
  //     token: verificationToken
  //   });


  //  getUser() {
  //   return this.http.get<Register>(this.apiServerUrl);
  // }

  // updateProfile(username) {
  //   return this.http.put(this.apiServerUrl, username);
  // }



  // verifyEmail(verificationToken) {
  //   return this.http.post(this.apiServerUrl + '/registration/validate', {
  //     token: verificationToken
  //   });
  // }

  // forgotPasswordRequest(email) {
  //   return this.httpClient.post(this.publicUrl + '/password/forgot', {
  //     email
  //   });
  // }

  // forgotPasswordConfirm(passwordForgotToken) {
  //   return this.httpClient.post(this.publicUrl + '/password/forgot/confirm', {
  //     token: passwordForgotToken
  //   });
  // }

  // forgotPasswordReset(passwordForgotToken, newPassword, newPasswordConfirm) {
  //   return this.httpClient.post(this.publicUrl + '/password/forgot/validate', {
  //     token: passwordForgotToken,
  //     newPassword,
  //     newPasswordConfirm
  //   });
  // }


  // resetPassword(oldPassword, newPassword, newPasswordConfirm) {
  //   return this.httpClient.post(this.url + '/password/reset', {
  //     oldPassword,
  //     newPassword,
  //     newPasswordConfirm
  //   });
  // }

  // getVerificationStatus() {
  //   return this.httpClient.get(this.url + '/status');
  // }

}















