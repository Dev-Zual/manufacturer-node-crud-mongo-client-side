import React from 'react';

const UserTable = ({ user, index }) => {
  const { _id, email } = user;
  return (
    <tr>
      <th>{index + 1}</th>
      <td>{email}</td>
      <td>{_id}</td>
    </tr>
  );
};

export default UserTable;
