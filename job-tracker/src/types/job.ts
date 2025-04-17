export interface JobApplication {
  id: string;
  company: string;
  role: string;
  status: 'Applied' | 'Interviewing' | 'Rejected' | 'Offer';
  dateApplied: string;
  notes?: string;
}


// export interface JobApplication {
//   id: string;
//   company: string;
//   role: string;
//   status: string;
//   dateApplied: string;
//   notes?: string; // <-- add this if you use `notes` in form
// }

