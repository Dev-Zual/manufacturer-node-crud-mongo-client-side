import React, { useEffect, useState } from 'react';
import UserTable from './UserTable';

const AllUsers = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch('https://still-ridge-84035.herokuapp.com/users')
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Email</th>
              <th>User Id</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <UserTable key={user._id} index={index} user={user}></UserTable>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
