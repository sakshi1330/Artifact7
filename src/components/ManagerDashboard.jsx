import React from "react";
import { useNavigate } from "react-router-dom";
import "./ManagerDashboard.css"; // CSS for styling

const ManagerDashboard = () => {
  const navigate = useNavigate();

  const handleViewPerformanceClick = () => {
    navigate("/view-employee-performance");
  };

  const handleAddNewEmployeeClick = () => {
    navigate("/add-employee");
  };

  const handleViewAllEmployeesClick = () => {
    navigate("/all-employees");
  };

  const handleViewReportsClick = () => {
    navigate("/reports");
  };

  return (
    <div className="manager-dashboard-container">
      <h1>Manager Dashboard</h1>
      <div className="manager-cards">
        <div className="manager-card" onClick={handleViewPerformanceClick}>
          <h2>View Employee Performance</h2>
          <p>Click to view performance data of team members</p>
        </div>
        <div className="manager-card" onClick={handleAddNewEmployeeClick}>
          <h2>Add New Employee</h2>
          <p>Click to add a new employee to the team</p>
        </div>
        <div className="manager-card" onClick={handleViewAllEmployeesClick}>
          <h2>View All Employees</h2>
          <p>Click to view a list of all employees</p>
        </div>
        <div className="manager-card" onClick={handleViewReportsClick}>
          <h2>View Reports</h2>
          <p>Click to view various reports</p>
        </div>
      </div>
    </div>
  );
};
export default ManagerDashboard;