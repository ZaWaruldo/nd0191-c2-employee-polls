// src/components/Login.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { setAuthedUser } from '../actions/authedUser';

const Login = () => {
  const [selectedUser, setSelectedUser] = useState('');
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // Get the page the user attempted to access before login
  const from = location.state?.from || '/';

  const handleLogin = () => {
    if (selectedUser) {
      dispatch(setAuthedUser(selectedUser));
      navigate(from); // Navigate back to the last attempted route after login
    }
  };

  return (
    <div>
      <h3>Login</h3>
      <select value={selectedUser} onChange={(e) => setSelectedUser(e.target.value)}>
        <option value="">Select User</option>
        {Object.keys(users).map((userId) => (
          <option key={userId} value={userId}>
            {users[userId].name}
          </option>
        ))}
      </select>
      <button onClick={handleLogin} disabled={!selectedUser}>
        Login
      </button>
    </div>
  );
};

export default Login;
