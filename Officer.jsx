import React, { useState, useEffect } from 'react';

const Officer = ({ user, isAdminView = false }) => {
  const [selected, setSelected] = useState(null);
  const [complaints, setComplaints] = useState([]);

  useEffect(() =>v {
    const url = isAdminView 
      ? 'http://localhost:5000/api/admin/all-complaints' 
      : 'http://localhost:5000/api/officer/complaints';
      
    fetch(url)
      .then(res => res.json())
      .then(data => { if (Array.isArray(data)) setComplaints(data); })
      .catch(err => console.error(err));
  }, [isAdminView]);

  return (
    <div>
      {!isAdminView && <div className="navbar"><h1>OFFICER DASHBOARD</h1></div>}
      <div className="container">
        <h3>Active Complaints (Latest 20)</h3><br/>
        {complaints.length === 0 ? <p>No complaints filed yet.</p> : complaints.map(c => (
          <div key={c._id} className="complaint-card" onClick={() => setSelected(c)}>
            <strong>{c.fullName}</strong> ({c.department}): {c.description.substring(0, 40)}...
            <span className={`status ${c.status}`} style={{float: 'right'}}>{c.status}</span>
          </div>
        ))}
        {selected && (
          <div style={{position:'fixed', top:0, left:0, width:'100%', height:'100%', background:'rgba(0,0,0,0.7)', display:'flex', justifyContent:'center', alignItems:'center', zIndex:100}}>
            <div className="form-box">
              <h2>Complaint Details</h2><br/>
              <p><strong>From:</strong> {selected.fullName}</p>
              <p><strong>Dept:</strong> {selected.department}</p><br/>
              <p><strong>Message:</strong> {selected.description}</p><br/>
              <p><strong>Current Status:</strong> <span className={`status ${selected.status}`}>{selected.status}</span></p><br/>
              <button onClick={() => setSelected(null)}>Close</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default Officer;
