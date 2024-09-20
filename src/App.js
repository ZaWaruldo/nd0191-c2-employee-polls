import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import PrivateRoute from './components/PrivateRoute';
import PollDetails from './components/PollDetails';
import NewPoll from './components/NewPoll';
import Leaderboard from './components/Leaderboard';

import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { receiveUsers } from './actions/users';
import { receiveQuestions } from './actions/questions';
import { _getUsers, _getQuestions } from './_DATA';

import NavBar from './components/NavBar';

const App = () => {
  const authedUser = useSelector((state) => state.authedUser);

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
        {/* Only show NavBar if the user is logged in */}
        {authedUser && <NavBar />}
        <Routes>
          {/* Login Route */}
          <Route path="/login" element={<Login />} />
          
          {/* Home Route Protected by PrivateRoute */}
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />

          {/* Poll Details Protected */}
          <Route
            path="/questions/:question_id"
            element={
              <PrivateRoute>
                <PollDetails />
              </PrivateRoute>
            }
          />

          {/* New Poll Protected */}
          <Route
            path="/add"
            element={
              <PrivateRoute>
                <NewPoll />
              </PrivateRoute>
            }
          />

          {/* Leaderboard Protected */}
          <Route
            path="/leaderboard"
            element={
              <PrivateRoute>
                <Leaderboard />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
