export interface Project {
  id_project: number,
  nameProject: string,
  description: string,
  dateStated: Date,
  dateEnded: Date,
  status: number,
  totalMember: number,
  listMember: [],
  totalIssues: number,
  listIssues: []
}
