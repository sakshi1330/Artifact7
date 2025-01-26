import React, { useState } from "react";
import "./ViewEmployeePerformance.css";

const ViewEmployeePerformance = () => {
  const [filter, setFilter] = useState({ course: "", dateRange: "", employee: "" });
  const [performanceData, setPerformanceData] = useState([
    {
      employeeName: "Jane Doe",
      course: "React Basics",
      courseCompletion: "92%",
      quizScores: "88%",
      activeCourses: 1,
      completedCourses: 7,
      date: "2025-01-20",
    },
    {
      employeeName: "John Smith",
      course: "Advanced JavaScript",
      courseCompletion: "80%",
      quizScores: "85%",
      activeCourses: 3,
      completedCourses: 4,
      date: "2025-01-15",
    },
    {
        employeeName: "sakshi",
        course: "python",
        courseCompletion: "95%",
        quizScores: "89%",
        activeCourses: 2,
        completedCourses: 4,
        date: "2024-05-15",
      },
      {
        employeeName: "Mike Johnson",
        course: "Advanced Java",
        courseCompletion: "60%",
        quizScores: "35%",
        activeCourses: 6,
        completedCourses: 6,
        date: "2025-07-18",
      },
      {
        employeeName: "Emily Davis",
        course: "Software Engineer",
        courseCompletion: "60%",
        quizScores: "74%",
        activeCourses: 4,
        completedCourses: 5,
        date: "2024-10-12",
      },
      {
        employeeName: "Sarah Wilson",
        course: "DevOps Engineer",
        courseCompletion: "78%",
        quizScores: "65%",
        activeCourses: 2,
        completedCourses: 4,
        date: "2024-11-12",
      },

      
  ]);

  const handleFilterChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  const filteredData = performanceData.filter((data) => {
    return (
      (!filter.course || data.course.toLowerCase().includes(filter.course.toLowerCase())) &&
      (!filter.dateRange || data.date === filter.dateRange) &&
      (!filter.employee || data.employeeName.toLowerCase().includes(filter.employee.toLowerCase()))
    );
  });

  return (
    <div className="view-employee-performance-container">
      <h1>Employee Performance</h1>
      <div className="filters">
        <input
          type="text"
          name="course"
          placeholder="Filter by course"
          value={filter.course}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="dateRange"
          placeholder="Filter by date"
          value={filter.dateRange}
          onChange={handleFilterChange}
        />
        <input
          type="text"
          name="employee"
          placeholder="Filter by employee name"
          value={filter.employee}
          onChange={handleFilterChange}
        />
      </div>
      <table className="performance-table">
        <thead>
          <tr>
            <th>Employee Name</th>
            <th>Course</th>
            <th>Course Completion</th>
            <th>Quiz Scores</th>
            <th>Active Courses</th>
            <th>Completed Courses</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.length > 0 ? (
            filteredData.map((data, index) => (
              <tr key={index}>
                <td>{data.employeeName}</td>
                <td>{data.course}</td>
                <td>{data.courseCompletion}</td>
                <td>{data.quizScores}</td>
                <td>{data.activeCourses}</td>
                <td>{data.completedCourses}</td>
                <td>{data.date}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="7">No data available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ViewEmployeePerformance;