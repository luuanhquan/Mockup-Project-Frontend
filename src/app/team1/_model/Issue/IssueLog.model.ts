export interface IssueLogModel{
  user:string
  title:string
  description:string
  date_start: Date
  date_due:Date
  type:string
  target:string
  priority:string
  process: number
  solution:string
  timespend:number
  status:string
  comment:string
  changedTime:string
}
