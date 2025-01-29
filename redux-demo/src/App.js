import logo from './logo.svg';
import './App.css';
import ECommerceCart from './Components/ECommerceCart';
import SocialMediaPost from './Components/SocialMediaPost';
import TaskManagementSystem from './Components/TaskManagementSystem';
import Quizz from './Components/Quizz';
import UserProfileManagement from './Components/UserProfileManagement';
import LibraryManagementSystem from './Components/LibraryManagementSystem';
import DigitalAddressBook from './Components/DigitalAddressBook';
import MovieTicketBooking from './Components/MovieTicketBooking';

function App() {
  return (
    <div className="App">
      <ECommerceCart />
      <SocialMediaPost />
      <TaskManagementSystem />
      <Quizz />
      <UserProfileManagement />
      <LibraryManagementSystem />
      <DigitalAddressBook />
      <MovieTicketBooking />
    </div>
  );
}

export default App;
