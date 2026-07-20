import React, { useState, useEffect } from 'react';

const User = ({ user }) => {
  const depts = ["Revenue", "Police", "Electricity", "Water", "Municipal", "Health", "Education", "Transport", "Agriculture", "Forest", "Housing", "Welfare", "Civil Supplies", "Irrigation", "Labor"];
  const [complaints, setComplaints] = useState([]);
  const [complaintText, setComplaintText] = useState('');
  const [selectedDept, setSeclectedDept] = useState(depts[0]);

  // Fetch Citizen's Real Complaints from DB
  const fetchComplaints = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/user/my-complaints/${user.mailId}`);
      const data = await res.json();
      if (Array.isArray(data)) setComplaints(data);
    } catch (err) {
      console.error("Error fetching complaints:", err);
    }
  };

  useEffect(() => {
    fetchComplaints();
  }, [user.mailId]);

  const handleComplaintSubmit = async (e) => {
    e.preventDefault();
    const complaintData = {
      fullName: user.name,
      mailId: user.mailId,
      phoneNumber: "Saved in DB", 
      address: "Saved in DB",
      department: selectedDept,
      description: complaintText
    };

    try {
      const res = await fetch('http://localhost:5000/api/user/complaint', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(complaintData)
      });
      if (res.ok) {
        alert("Complaint submitted successfully!");
        setComplaintText('');
        fetchComplaints(); // Refresh list
      }
    } catch (err) {
      alert("Failed to submit complaint.");
    }
  };

  return (
    <div>
      <div className="navbar">
        <h1>CITIZENS COMPLAINT PORTAL</h1>
        <i className="fa-solid fa-ellipsis-vertical" style={{fontSize: '24px'}}></i>
      </div>
      <div className="container">
        <h3>Post a Complaint</h3>
        <form onSubmit={handleComplaintSubmit} className="form-box" style={{margin: '20px 0'}}>
          <input className="form-group" value={user.name} disabled />
          <input className="form-group" value={user.mailId} disabled />
          <select className="form-group" value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
            {depts.map(d => <option key={d}>{d}</option>)}
          </select>
          <textarea className="form-group" placeholder="Your Complaint Description" rows="4" value={complaintText} onChange={(e) => setComplaintText(e.target.value)} required></textarea>
          <button type="submit">Submit</button>
        </form>
        <hr/><br/>
        <h3>Check Your Complaints Status (Latest 10)</h3><br/>
        {complaints.length === 0 ? <p>No complaints found.</p> : complaints.map(c => (
          <div key={c._with || c._id} className="complaint-card">
            <span><strong>[{c.department}]</strong> {c.description}</span>
            <span className={`status ${c.status}`} style={{float: 'right'}}>{c.status}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default User;
