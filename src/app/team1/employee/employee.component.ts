import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Users } from './users';

import { UserService } from './employee.service';
import { Usersfull } from './users1';
import { UserDivision } from './userdivision';
import { searchCriteria } from './key';




@Component({
  selector: 'app-root',
  templateUrl: 'employee.component.html'
})
export class EmployeeComponent implements OnInit {

  indexPagination: number = 0;
  totalPagination: number;
  public users: Users[];
  public editUser: Usersfull;
  public deleteUser: Usersfull;
  public moveUser: UserDivision;
  public userDivision: UserDivision[];
  public usersfull: Usersfull[] = [];
  seach: searchCriteria = {
    keyword1: "",
    keyword2: "",
    keyword3: ""
  };



  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.getUsersfull();


  }




  public getUsersfull(): void {
    this.userService.getfullUser(this.indexPagination).subscribe(
      (response: Usersfull[]) => {
        this.usersfull = response;
      },

      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // getuserdivision

  public getUserdivision(): void {
    this.userService.getUserdivision().subscribe(
      (response: UserDivision[]) => {
        this.userDivision = response;
      },

      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




  public onAddUser(addForm: NgForm): void {
    console.log(addForm.value);
    document.getElementById('add-employee-form').click();
    this.userService.addUser(addForm.value).subscribe(
      (response: Usersfull) => {
        this.getUsersfull();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

  public onUpdateUser(usersfull: Usersfull): void {
    this.userService.updateUser(usersfull).subscribe(
      (response: Usersfull) => {

        this.getUsersfull();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }




  // move
  public onMoveEmloyee(userdivision: UserDivision): void {
    this.userService.moveEmployee(userdivision).subscribe(
      (response: UserDivision) => {
        console.log(userdivision);
        this.getUserdivision();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onDeleteUser(userId: number): void {
    this.userService.deleteUser(userId).subscribe(
      (response: void) => {
        console.log(response);
        this.getUsersfull();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }


  firtPage() {
    this.indexPagination = 0;
    this.ngOnInit();
  }

  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    if (this.usersfull.length == 0) {
      this.indexPagination = this.indexPagination - 1;
    } else {
      this.userService.getfullUser(this.indexPagination).subscribe((data: Usersfull[]) => {
        this.usersfull = data;
      })



    }
  }

  prviousPage() {
    this.indexPagination = this.indexPagination - 1;
    if (this.indexPagination <= 0) {
      this.indexPagination = 0;
      this.ngOnInit();
    } else {
      this.userService.getfullUser(this.indexPagination).subscribe((data: Usersfull[]) => {
        this.usersfull = data;
      })
    }
  }

  // public searchEmployees(key: string): void {
  //   console.log(key);
  //   const results: Usersfull[] = [];
  //   for (const user of this.usersfull) {
  //     if (user.username.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //       // || user.personalid.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     ) {
  //       results.push(user);
  //     }
  //   }
  //   this.usersfull = results;
  //   if (results.length === 0 || !key) {
  //     return;
  //   }
  // }

  public onOpenModal(usersfull: Usersfull, mode: string): void {
    const container = document.getElementById('main-container');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addEmployeeModal');
    }
    if (mode === 'edit') {
      this.editUser = usersfull;
      button.setAttribute('data-target', '#updateEmployeeModal');
    }
    if (mode === 'delete') {
      this.deleteUser = usersfull;
      button.setAttribute('data-target', '#deleteEmployeeModal');
    }

    container.appendChild(button);
    button.click();
  }
  public onOnpen(userdivision: UserDivision, mode: string): void {
    const move = document.getElementById('move');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'move') {
      this.moveUser = userdivision;
      button.setAttribute('data-target', '#moveEmployeeModal');
    }
    move.appendChild(button);
    button.click();

  }

  search(search): void {

    this.userService.search(search).subscribe((data: Usersfull[]) => {
      console.log(data)
      this.usersfull = data;



    }
    )
  }



}






