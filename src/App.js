import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Pages/Dashboard-Folder/Dashboard";
import JobSeeker from "./Pages/JobSeeker-Folder/JobSeeker";
import Employer from "./Pages/Employer-Folder/Employer";
import About_Us from "./Pages/About-Folder/About_Us";
import Setting from "./Pages/Setting-Folder/Setting";
import User from "./Pages/User";
import Home from "./Pages/Home-Folder/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/dashboard" element={<Dashboard />} />
          <Route exact path="/employer" element={<Employer />} />
          <Route exact path="/jobseeker" element={<JobSeeker />} />
          <Route exact path="/about_us" element={<About_Us />} />
          <Route exact path="/setting" element={<Setting />} />
          <Route exact path="/user" element={<User />} />
          <Route exact path="/jobseeker" element={<JobSeeker />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
