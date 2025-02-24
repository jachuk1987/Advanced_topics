import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    title: 'Frontend Developer',
    description: 'Looking for an experienced React developer to build UI components.'
  },
  {
    id: 2,
    title: 'Backend Developer',
    description: 'Seeking a Node.js expert to develop RESTful APIs.'
  },
  {
    id: 3,
    title: 'UI/UX Designer',
    description: 'Creative designer needed for web and mobile app interfaces.'
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    description: 'Responsible for CI/CD pipelines and cloud infrastructure management.'
  },
  {
    id: 5,
    title: 'Full Stack Developer',
    description: 'Expertise in both frontend and backend development is required.'
  },
  {
    id: 6,
    title: 'Product Manager',
    description: 'Manage product lifecycle and collaborate with cross-functional teams.'
  },
  {
    id: 7,
    title: 'Data Scientist',
    description: 'Analyze data patterns and build predictive models.'
  },
  {
    id: 8,
    title: 'Mobile App Developer',
    description: 'Develop and maintain mobile applications for iOS and Android.'
  },
  {
    id: 9,
    title: 'Quality Assurance Engineer',
    description: 'Conduct manual and automated testing to ensure product quality.'
  },
  {
    id: 10,
    title: 'Technical Support Specialist',
    description: 'Provide technical support and resolve customer issues.'
  }
];

const jobsSlice = createSlice({
  name: 'jobs',
  initialState,
  reducers: {
    addJob: (state, action) => {
      state.push(action.payload);
    },
    removeJob: (state, action) => {
      return state.filter(job => job.id !== action.payload);
    },
  },
});

export const { addJob, removeJob } = jobsSlice.actions;
export default jobsSlice.reducer;