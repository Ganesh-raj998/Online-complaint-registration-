import React, { useState } from 'react';

const LoginRegister = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [data, setData] = useState({ fullName: '', mailId: '', phoneNumber: '', password: '', address: '', role: 'citizen' });

  const handleChange = (e) => setData({...data, [e.target.name]: e.target.value});
  
  const handleAction = async (e) => {
    e.preventDefault();
    const url = isLogin ? 'http://localhost:5000/api/login' : 'http://localhost:5000/api/register';
    
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });
      const resData = await response.json();

      if (!response.ok) {
        alert(resData.message);
        return;
      }

      if (isLogin) {
        // Successful login saves session in App.jsx
        onLogin(resData);
      } else {
        alert("Account Created Successfully! Now Login.");
        setIsLogin(true);
      }
    } catch (error) {
      alert("Server error, make sure backend is running!");
    }
  };

  return (
    <div>
      <div className="big-header"><h1>ONLINE COMPLAINT REGISTRATION</h1></div>
      <p className="welcome-msg">Welcome to complaint registration portal</p>
      <div className="form-box">
        <h3>{isLogin ? "Login to register complaint" : "Create Account"}</h3><br/>
        <form onSubmit={handleAction}>
          <div className="form-group"><label>Full Name</label><input name="fullName" onChange={handleChange} required /></div>
          <div className="form-group"><label>Mail ID</label><input type="email" name="mailId" onChange={handleChange} required /></div>
          <div className="form-group"><label>Phone Number</label><input name="phoneNumber" onChange={handleChange} required /></div>
          <div className="form-group"><label>Password</label><input type="password" name="password" onChange={handleChange} required /></div>
          {!isLogin && <div className="form-group"><label>Confirm Password</label><input type="password" required /></div>}
          <div className="form-group"><label>Address</label><input name="address" onChange={handleChange} required /></div>
          <div className="form-group">
            <label>Login as a</label>
            <select name="role" onChange={handleChange} value={data.role}>
              <option value="citizen">as a citizen</option>
              <option value="officer">as a officer</option>
              <option value="admin">as a admin</option>
            </select>
          </div>
          <button type="submit">{isLogin ? "Login" : "Create Account"}</button>
        </form>
        <p className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Account not found? Create Account" : "Back to Login"}
        </p>
      </div>
    </div>
  );
};
export default LoginRegister;
