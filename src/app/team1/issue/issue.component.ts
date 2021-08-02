import {Component, OnInit, ViewChild} from '@angular/core';
import {AngularTreeGridModule} from 'angular-tree-grid';
import {IssueList} from '../../model/IssueList.model';

@Component({
  templateUrl: 'issue.component.html'
})
export class IssueComponent implements OnInit{
@ViewChild('angularGrid') angularGrid: AngularTreeGridModule;
data: IssueList;
  constructor() { }

  ngOnInit(): void {
  }

}
