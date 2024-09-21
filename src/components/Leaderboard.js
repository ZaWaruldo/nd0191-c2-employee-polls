// src/components/Leaderboard.js
import React from 'react';
import { useSelector } from 'react-redux';


const Leaderboard = () => {
  const users = useSelector((state) => state.users);

  const leaderboard = Object.values(users)
    .map((user) => ({
      id: user.id,
      name: user.name,
      avatarURL: user.avatarURL,
      questionsCreated: user.questions.length,
      questionsAnswered: Object.keys(user.answers).length,
      score: user.questions.length + Object.keys(user.answers).length
    }))
    .sort((a, b) => b.score - a.score); // Sort by score in descending order

  return (

    <div>
      <h3>Leaderboard</h3>


      <ul>
        {leaderboard.map((user) => (
          <li key={user.id}>
            <div>
              <img src={user.avatarURL} alt='' height="100"/>
              <div>{user.name}</div>
              <div>Questions Created: {user.questionsCreated}</div>
              <div>Questions Answered: {user.questionsAnswered}</div>
              <div>Total Score: {user.score}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
