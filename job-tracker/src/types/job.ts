// export interface JobApplication {
//   id: number;
//   company: string;
//   role: string;
//   status: 'Applied' | 'Interviewing' | 'Rejected' | 'Offer';
//   date: string;
//   notes?: string;
// }

export interface JobApplication {
  id: string;
  company: string;
  role: string;
  status: string;
  dateApplied: string; // Add this line (or Date if you prefer)
}
