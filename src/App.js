// src/App.js
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login.js';
import Home from './components/Home.js'; // Placeholder for the Home component
import PrivateRoute from './components/PrivateRoute.js';
import PollDetails from './components/PollDetails.js';
import NewPoll from './components/NewPoll';
import Leaderboard from './components/Leaderboard';

import { useDispatch } from 'react-redux';
import { receiveUsers } from './actions/users';
import { receiveQuestions } from './actions/questions';
import { _getUsers, _getQuestions } from './_DATA'; // Adjust the path as needed

// Example of a simple NavBar component
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch users and questions data
    Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
    });
  }, [dispatch]);

  return (
    <Router>
      <div>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <PrivateRoute>
                <Home />
            </PrivateRoute>
            }/>
          <Route path="/questions/:question_id" element={<PollDetails />} />
          <Route path="/add" element={<NewPoll />} />
          <Route path="/leaderboard" element={<Leaderboard />} />

        </Routes>
      </div>
    </Router>
  );
};

export default App;
