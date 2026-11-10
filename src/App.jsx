import React, { useState } from "react";
import "./App.css";

function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container">

      {isLoggedIn ? (

        <div>
          <h1>Welcome Home!</h1>

          <button onClick={() => setIsLoggedIn(false)}>
            Logout
          </button>

          <h2>Student Details</h2>

          <StudentList />
        </div>

      ) : (

        <div className="login-box">
          <h1>Login Page</h1>

          <p>Please login to continue</p>

          <button onClick={() => setIsLoggedIn(true)}>
            Login
          </button>
        </div>

      )}

    </div>
  );
}

function StudentList() {

  let students = [
    { id: 1, name: "Arun", email: "arun@gmail.com", age: 22, city: "Chennai", role: "Developer" },
    { id: 2, name: "Priya", email: "priya@gmail.com", age: 21, city: "Madurai", role: "Designer" },
    { id: 3, name: "Kumar", email: "kumar@gmail.com", age: 23, city: "Salem", role: "Tester" },
    { id: 4, name: "Divya", email: "divya@gmail.com", age: 22, city: "Trichy", role: "Manager" },
    { id: 5, name: "Ravi", email: "ravi@gmail.com", age: 24, city: "Chennai", role: "Developer" }
  ];

  return (
    <div className="card-container">

      {students.map((student) => (
        <div className="card" key={student.id}>
          <h3>{student.name}</h3>
          <p>Email: {student.email}</p>
          <p>Age: {student.age}</p>
          <p>City: {student.city}</p>
          <p>Role: {student.role}</p>
        </div>
      ))}

    </div>
  );
}

export default App;
