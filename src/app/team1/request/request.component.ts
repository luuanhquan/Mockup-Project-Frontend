<<<<<<< Updated upstream
import { Component } from '@angular/core';

@Component({
  templateUrl: 'request.component.html'
})
export class RequestComponent {

  constructor() { }

=======

import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LeaveRequests } from './leaverequests';
import{LeaveRequestService} from './leaverequests.service'


@Component({
  selector: 'app-root',
  templateUrl: 'request.component.html'
})
export class RequestComponent implements OnInit{
  public leaveRequests: LeaveRequests[];
  public approveRequest: LeaveRequests;
  public cancelRequest: LeaveRequests;
  public refuseRequest: LeaveRequests;

  constructor(private leaveRequestService: LeaveRequestService) {}
  ngOnInit() {
    this.getLeaveRequests();
  }

  public getLeaveRequests(): void {
    this.leaveRequestService.getLeaveRequests().subscribe(
      (response: LeaveRequests[]) => {
        this.leaveRequests = response;
        console.log(this.leaveRequests);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }
  public onAddRequest(addForm: NgForm): void {
    document.getElementById('add-request-form').click();
    this.leaveRequestService.addNewRequest(addForm.value).subscribe(
      (response: LeaveRequests) => {
        console.log(response);
        this.getLeaveRequests();
        addForm.reset();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
        addForm.reset();
      }
    );
  }

///chua xy ly xong
  public onApproveRequest(leaveRequests: LeaveRequests): void {
    this.leaveRequestService.approveRequest(leaveRequests).subscribe(
      (response: LeaveRequests) => {
        console.log(response);
        this.getLeaveRequests();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  public onRefuseRequest(leaveRequests: LeaveRequests): void {
    this.leaveRequestService.refuseRequest(leaveRequests).subscribe(
      (response: LeaveRequests) => {
        console.log(response);
        this.getLeaveRequests();

      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }



  // public onApproveRequest(id: number): void {
  //   this.leaveRequestService.approveRequest(id).subscribe(
  //     (response: void) => {
  //       console.log(response);
  //       this.getLeaveRequests();
  //     },
  //     (error: HttpErrorResponse) => {
  //       alert(error.message);
  //     }
  //   );
  // }


  public onCancelRequest(id: number): void {
    this.leaveRequestService.cancelRequest(id).subscribe(
      (response: void) => {
        console.log(response);
        this.getLeaveRequests();
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

  // public search s(key: string): void {
  //   console.log(key);
  //   const results: Employee[] = [];
  //   for (const employee of this.employees) {
  //     if (employee.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || employee.email.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || employee.phone.toLowerCase().indexOf(key.toLowerCase()) !== -1
  //     || employee.jobTitle.toLowerCase().indexOf(key.toLowerCase()) !== -1) {
  //       results.push(employee);
  //     }
  //   }
  //   this.employees = results;
  //   if (results.length === 0 || !key) {
  //     this.getEmployees();
  //   }
  // }

  public onOpenModal(leaveRequests: LeaveRequests, mode: string): void {
    const container = document.getElementById('container-main');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addRequestModal');
    }

     if (mode === 'approve') {
      this.approveRequest = leaveRequests;
      button.setAttribute('data-target', '#approveRequestModal');
    }
     if (mode === 'refuse') {
      this.refuseRequest = leaveRequests;
      button.setAttribute('data-target', '#refuseRequestModal');
    }
    if (mode === 'cancel') {
      this.cancelRequest = leaveRequests;
      button.setAttribute('data-target', '#cancelRequestModal');
    }
    container.appendChild(button);
    button.click();
  }
>>>>>>> Stashed changes
}
