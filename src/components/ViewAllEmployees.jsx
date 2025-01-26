import React from "react";
import "./ViewAllEmployees.css";

const ViewAllEmployees = () => {
  const employees = [
    { id: "#E001", name: "John Doe", position: "Software Engineer", team: "Frontend Team" },
    { id: "#E002", name: "Jane Smith", position: "Data Scientist", team: "AI & ML Team" },
    { id: "#E003", name: "Mike Johnson", position: "Backend Developer", team: "Backend Team" },
    { id: "#E004", name: "Emily Davis", position: "HR Manager", team: "HR Team" },
    { id: "#E005", name: "Chris Brown", position: "DevOps Engineer", team: "Infrastructure Team" },
    { id: "#E006", name: "Sarah Wilson", position: "UI/UX Designer", team: "Design Team" },
  ];

  return (
    <div className="view-all-employees-container">
      <h1>All Employees</h1>
      <div className="employees-header">
        <input
          type="text"
          placeholder="Search by Employee ID / Name / Position / Team"
          className="search-input"
        />
      </div>
      <table className="employees-table">
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Employee Name</th>
            <th>Position</th>
            <th>Team</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index}>
              <td>{employee.id}</td>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.team}</td>
            </tr>
          ))}
        </tbody>
      </table>
      
    </div>
  );
};

export default ViewAllEmployees;
