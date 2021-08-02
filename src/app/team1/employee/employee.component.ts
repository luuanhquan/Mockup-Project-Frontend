
import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from './users';

import { UserService } from './employee.service';

@Component({
  selector: 'app-root',
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit{
  public users: Users[];
  public editUser: Users;
  public deleteUser: Users;
  public moveUser: Users;
  p:number=1;
  
  constructor(private userService: UserService) {}
  ngOnInit() {
    this.getUsers();
  }

  public getUsers(): void {
    this.userService.getUser().subscribe(
      (response: Users[]) => {
        this.users = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onAddUser(addForm: NgForm): void {
    document.getElementById('add-employee-form').click();
    this.userService.addUser(addForm.value).subscribe(
      (response: Users) => {
        this.getUsers();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateUser(users: Users): void {
    this.userService.updateUser(users).subscribe(
      (response: Users) => {
        console.log(users);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  // edit 
  // public onMoveEmloyee(employee: Employee): void {
  //   this.employeeService.moveEmployee(employee).subscribe(
  //     (response: Employee) => {
  //       console.log(employee);
  //       this.getEmployees();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }

  public onDeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsers();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  // public searchEmployees(key: string): void {
  //   console.log(key);
  //   const results: Employee[] = [];
  //   for (const employee of this.employees) {
  //     if(employee.CLASS_NAME.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || employee.personId.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     ){
  //       results.push(employee);
  //     }
  //   }
  //   this.employees = results;
  //   if (results.length === 0 || !key) {
  //     return
  //   }
  // }

  public onOpenModal(user: Users, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editUser = user;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteUser = user;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }
    if (mode === 'move') {
      this.moveUser = user;
      button.setAttribute('data-target', '#moveEmployeeModal');
    }
    container.appendChild(button);
    button.click();
  }
}