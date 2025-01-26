import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ManagerDashboard from "./components/ManagerDashboard";
import ViewEmployeePerformance from "./components/ViewEmployeePerformance";
import AddEmployee from "./components/AddEmployee";
import ViewAllEmployees from "./components/ViewAllEmployees";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ManagerDashboard />} />
        <Route path="/view-employee-performance" element={<ViewEmployeePerformance />} />
        <Route path="/add-employee" element={<AddEmployee />} />
        <Route path="/all-employees" element={<ViewAllEmployees />} />
      </Routes>
    </Router>
  );
}

export default App;