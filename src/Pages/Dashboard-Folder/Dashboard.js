import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard-container">
      <h2>Dashboard</h2>
      <div className="dashboard-content">
        <div className="dashboard-container-1">
          <div className="Dashboard-text">
            <h3>Available Applicants</h3>
            <h1>5</h1>
            <p>as of November 24,2021</p>
          </div>

          <div className="Dashboard-view">
            <h2>View</h2>
          </div>
        </div>
        <div className="dashboard-container-1">
          <div className="Dashboard-text">
            <h3>Job Applicants</h3>
            <h1>5</h1>
            <p>as of November 24,2021</p>
          </div>

          <div className="Dashboard-view">
            <h2>View</h2>
          </div>
        </div>
        <div className="dashboard-container-1">
          <div className="Dashboard-text">
            <h3>Active Job Post</h3>
            <h1>5</h1>
            <p>as of November 24,2021</p>
          </div>

          <div className="Dashboard-view">
            <h2>View</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
