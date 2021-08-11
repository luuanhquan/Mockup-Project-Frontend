import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularTreeGridModule} from 'angular-tree-grid';
import {IssueDetailModel} from '../_model/Issue/IssueDetail.model';
import {ActivatedRoute, Router} from '@angular/router';
import {IssueService} from '../_service/issue.service';
import {NgForm} from '@angular/forms';

declare var $: any;
@Component({
  templateUrl: 'issue.component.html'
})
export class IssueComponent implements OnInit {
  @ViewChild('angularGrid') angularGrid: AngularTreeGridModule;
  data: IssueDetailModel;
  issueID: number;
  constructor(
    private service: IssueService,
    private route: ActivatedRoute,
    private router: Router
  ) {
  route.params.subscribe(param=> this.issueID=param['id']);
    this.getData();
  console.log(this.issueID)
  }

  ngOnInit(): void {
  }

  getData(){
    this.service.getIssueDetail(this.issueID).subscribe(
      (response:IssueDetailModel) => {
        this.data=response;
        console.log(this.data);
      }
    )
  }

  isCollapsed: boolean = false;

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  changeModel(id: number) {
    this.issueID=id;
    this.getData();

  }

  updateIssue(addForm: NgForm) {

  }

  showModal(): void {
    $('#myModal').modal('show');
  }

  hideModal(): void {
    document.getElementById('close-modal').click();
  }
}
