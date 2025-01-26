import React, { useState } from "react";
import "./AddEmployee.css";

const AddEmployee = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Employee Added:", formData);
    // Logic to add the employee (e.g., API call)
    setFormData({ name: "", email: "", position: "" });
  };

  return (
    <div className="add-employee-container">
      <h1>Add New Employee</h1>
      <form onSubmit={handleSubmit} className="add-employee-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Position:
          <input
            type="text"
            name="position"
            value={formData.position}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;