export interface JobApplication {
  id: string;
  company: string;
  role: string;
  status: 'Applied' | 'Interviewing' | 'Rejected' | 'Offer';
  date: string;
  notes: string; // 🔥 Make sure this is NOT optional
}
