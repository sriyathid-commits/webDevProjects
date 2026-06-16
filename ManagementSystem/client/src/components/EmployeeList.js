import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function EmployeeList() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/employees")
      .then(res => setEmployees(res.data))
      .catch(err => console.error("Error fetching employees:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h2>👨‍💼 Employee List</h2>
      {employees.length === 0 ? (
        <p>No employees found.</p>
      ) : (
        employees.map(emp => (
          <div key={emp._id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px", borderRadius: "8px" }}>
            <h3>{emp.name}</h3>
            <p>{emp.department} - {emp.role}</p>
            <p>Salary: ₹{emp.salary}</p>
            <Link to={`/employee/${emp._id}`}>View Details</Link>
          </div>
        ))
      )}
    </div>
  );
}

export default EmployeeList;

