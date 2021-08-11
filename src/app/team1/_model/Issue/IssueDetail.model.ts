import {IssueLogModel} from './IssueLog.model';
import {FileModel} from './File.model';
import {SimpleIssueModel} from './SimpleIssue.model';

interface IssueModelData {
  typeList: string[];
  priorityList: string[];
  targetList: string[];
  status: string[];
}

export interface IssueDetailModel{
  id:number,
  creator:string,
  assignee:string,
  status:string,
  issueChangeLogDTO: IssueLogModel[];
  files: FileModel[];
  parent:SimpleIssueModel;
  subs:SimpleIssueModel[]
  modelData: IssueModelData;
}
