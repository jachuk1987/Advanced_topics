import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AdminHeader from "./Components/AdminHeader";
import Dashboard from "./Components/Dashboard/Dashboard";
import CelebrityRequest from "./Components/CelebrityRequest/CelebrityRequest";
import SponsoredEvent from "./Components/SponsoredEvent/SponsoredEvent";

function App() {
  return (
    <Router>
      <AdminHeader />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/celebrity-request" element={<CelebrityRequest />} />
        <Route path="/sponsored-event" element={<SponsoredEvent />} />
      </Routes>
    </Router>
  );
}

export default App;