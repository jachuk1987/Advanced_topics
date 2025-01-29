import logo from './logo.svg';
import './App.css';
import ECommerceCart from './Components/ECommerceCart';
import SocialMediaPost from './Components/SocialMediaPost';
import TaskManagementSystem from './Components/TaskManagementSystem';
import Quizz from './Components/Quizz';

function App() {
  return (
    <div className="App">
      <ECommerceCart />
      <SocialMediaPost />
      <TaskManagementSystem />
      <Quizz />
    </div>
  );
}

export default App;
