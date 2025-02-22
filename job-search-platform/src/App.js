import logo from './logo.svg';
import './App.css';
import { Provider } from 'react-redux';
import store from './redux/store';
import SearchBar from './Components/SearchBar';
import UserProfile from './Components/UserProfile';
import Notifications from './Components/Notifications';
import JobList from './Components/JobList';

function App() {
  return (
    <Provider store={store}>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold text-center mb-8">Job Search Platform</h1>
        <SearchBar />
        <UserProfile />
        <Notifications />
        <JobList />
      </div>
    </Provider>
  );
}

export default App;
