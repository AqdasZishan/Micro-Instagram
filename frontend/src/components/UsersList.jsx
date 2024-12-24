import React, { useState, useEffect } from "react";
import axios from "axios";
import '../index.css';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/users").then((response) => {
      setUsers(response.data);
    });
  }, []);

  const handleDelete = (userId) => {
    axios.delete(`http://localhost:3000/users/${userId}`).then(() => {
      setUsers(users.filter((user) => user.id !== userId));
    });
  };

  return (
    <div className="container">
      <h2 className="page-header">Users</h2>
      <table className="table">
        <thead>
          <tr>
            <th className="table-header">User ID</th>
            <th className="table-header">Name</th>
            <th className="table-header">Mobile Number</th>
            <th className="table-header">Address</th>
            <th className="table-header">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="table-row">
              <td className="table-cell">{user.id}</td>
              <td className="table-cell">{user.name}</td>
              <td className="table-cell">{user.mobileNumber}</td>
              <td className="table-cell">{user.address}</td>
              <td className="table-cell">
                <button onClick={() => handleDelete(user.id)} className="button-delete">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UsersList;