import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function EmployeeDetail() {
  const { id } = useParams();
  const [employee, setEmployee] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/employees/${id}`)
      .then(res => setEmployee(res.data))
      .catch(err => console.error("Error fetching employee:", err));
  }, [id]);

  if (!employee) return <p>Loading...</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h2>{employee.name}</h2>
      <p><b>Department:</b> {employee.department}</p>
      <p><b>Role:</b> {employee.role}</p>
      <p><b>Salary:</b> ₹{employee.salary}</p>
      <p><b>Date Joined:</b> {new Date(employee.dateJoined).toLocaleDateString()}</p>
    </div>
  );
}

export default EmployeeDetail;
