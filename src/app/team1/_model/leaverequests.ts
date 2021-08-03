export interface LeaveRequests {
  id: number;
  userRequested: string;
  userApproved: string;
  duration: number;
  unit: number;
  type: number;
  status: string;
  dateApproved: Date;
  dateRequested: Date;
  dateCreated: Date;
}


