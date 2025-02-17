import logo from './logo.svg';
import './App.css';
import AdminHeader from './AdminHeader';

function App() {
  return (
    <Router>
      <AdminHeader />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/celebrity-request" element={<CelebrityRequest />} />
      </Routes>
    </Router>
  );
}

export default App;
