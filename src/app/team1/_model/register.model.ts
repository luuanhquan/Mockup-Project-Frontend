import { Role } from "../enums/Role";
export class Register {

  username: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  active: boolean;
  role: string;

  constructor(username: string, email: string, password: string,phone : string, confirmPassword: string) {
      this.username = username;
      this.email = email;
      this.password = password;
      this.phone = phone;
      this.confirmPassword = confirmPassword;
      this.active = true;
      this.role = Role.Member;
  }
}
