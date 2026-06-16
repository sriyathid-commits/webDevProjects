import React, { useState } from "react";
import axios from "axios";

function EmployeeForm() {
  const [form, setForm] = useState({
    name: "",
    department: "",
    role: "",
    salary: ""
  });

  const handleSubmit = e => {
    e.preventDefault();
    axios.post("http://localhost:5000/api/employees", form)
      .then(() => {
        alert("✅ Employee added!");
        setForm({ name: "", department: "", role: "", salary: "" });
      })
      .catch(err => console.error("Error adding employee:", err));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>➕ Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Name"
          value={form.name}
          onChange={e => setForm({ ...form, name: e.target.value })}
        />
        <input
          placeholder="Department"
          value={form.department}
          onChange={e => setForm({ ...form, department: e.target.value })}
        />
        <input
          placeholder="Role"
          value={form.role}
          onChange={e => setForm({ ...form, role: e.target.value })}
        />
        <input
          placeholder="Salary"
          type="number"
          value={form.salary}
          onChange={e => setForm({ ...form, salary: e.target.value })}
        />
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
}

export default EmployeeForm;
 
