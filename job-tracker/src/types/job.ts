export interface JobApplication {
  id: number;
  company: string;
  role: string;
  status: 'Applied' | 'Interviewing' | 'Rejected' | 'Offer';
  date: string;
  notes?: string;
}