export interface Project {
  id: number,
  name: string,
  description: string,
  dateStated: Date,
  dateEnded: Date,
  status: number,
  totalMember: number,
  listMember: [],
  totalIssues: number,
  listIssues: []
}
