import { BrowserRouter, Routes, Route } from "react-router-dom";

import Landing from "./pages/Landing";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import BrowseSkills from "./pages/BrowseSkills";
import SkillDetails from "./pages/SkillDetails";
import Requests from "./pages/Requests";
import Matches from "./pages/Matches";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />

        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/browse-skills" element={<BrowseSkills />} />
        <Route path="/skill/:id" element={<SkillDetails />} />
        <Route path="/requests" element={<Requests />} />
        <Route path="/matches" element={<Matches />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;