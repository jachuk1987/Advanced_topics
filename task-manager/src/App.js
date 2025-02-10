
import Auth from './pages/auth';
import Login from './pages/Login';
import Signup from './pages/Signup';
import TaskList from './pages/TaskList'
const App = () => {
  return <>
    <div style={{ marginBottom: "40px" }}>
      <Auth/>
      {/* <Login />
      <Signup/> */}
    </div>
    <div>
      <TaskList />
    </div>
  </>
}

export default App