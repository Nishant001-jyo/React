import React from "react";

function Table() {

  const users = [
    {
      name: "Rahul",
      email: "rahul@gmail.com",
      status: "Active"
    },
    {
      name: "Aman",
      email: "aman@gmail.com",
      status: "Active"
    },
    {
      name: "Priya",
      email: "priya@gmail.com",
      status: "Pending"
    },
    {
      name: "Simran",
      email: "simran@gmail.com",
      status: "Active"
    }
  ];

  return (
    <div className="box table-box">

      <h2>Recent Users</h2>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>

          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <span className={`status ${user.status.toLowerCase()}`}>
                  {user.status}
                </span>
              </td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default Table;