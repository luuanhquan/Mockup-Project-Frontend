import {HttpErrorResponse} from '@angular/common/http';
import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {LeaveRequests} from '../_model/leaverequests';
import {LeaveRequestService} from '../_service/leaverequests.service';
import {REQUEST_STATUS} from '../enums/REQUEST_STATUS';
@Component({
  selector: 'app-root',
  templateUrl: 'request.component.html'
})
export class RequestComponent implements OnInit {
  public leaveRequests: LeaveRequests[];
  public approvedRequest: LeaveRequests;
  public cancelRequest: LeaveRequests;
  public deniedRequest: LeaveRequests;

  REQUEST_STATUS= REQUEST_STATUS;
  constructor(private leaveRequestService: LeaveRequestService) {
  }

  ngOnInit() {
    this.getLeaveRequests();
  }

// all Request
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
    // document.getElementById('add-request-form').click();
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

  cancel(leaveRequests: LeaveRequests) {
    this.leaveRequestService.cancel(leaveRequests.id).subscribe(res => {
        if (res) {
            leaveRequests.status = res.status;
        }
    });
}


approved(leaveRequests: LeaveRequests) {
  this.leaveRequestService.approved(leaveRequests.id).subscribe(res => {
      if (res) {
          leaveRequests.status = res.status;
      }
  });
}
denied(leaveRequests: LeaveRequests) {
  this.leaveRequestService.denied(leaveRequests.id).subscribe(res => {
      if (res) {
          leaveRequests.status = res.status;
      }
  });
}



showModal(): void {
  $('#myModal').modal('show');
}

hideModal(): void {
  document.getElementById('close-modal').click();
}


  public onOpenModal(leaveRequests: LeaveRequests, mode: string): void {
    const container = document.getElementById('container-main');
    const button = document.createElement('button');
    button.type = 'button';
    button.style.display = 'none';
    button.setAttribute('data-toggle', 'modal');
    if (mode === 'add') {
      button.setAttribute('data-target', '#addRequestModal');
    }

    if (mode === 'approved') {
      this.approvedRequest = leaveRequests;
      button.setAttribute('data-target', '#approvedRequestModal');
    }
    if (mode === 'denied') {
      this.deniedRequest = leaveRequests;
      button.setAttribute('data-target', '#deniedRequestModal');
    }

    if (mode === 'cancel') {
      this.cancelRequest = leaveRequests;
      button.setAttribute('data-target', '#cancelRequestModal');
    }
    container.appendChild(button);
    button.click();
  }

}
