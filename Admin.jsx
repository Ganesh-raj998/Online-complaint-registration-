import React from 'react';
import Officer from './Officer';

const Admin = ({ user }) => {
  return (
    <div style={{border: '10px solid #004a99', minHeight: '100vh'}}>
      <div className="navbar" style={{background: '#333'}}>
        <h1>ADMIN DASHBOARD</h1>
      </div>
      <Officer user={user} isAdminView={true} />
    </div>
  );
};
export default Admin;
