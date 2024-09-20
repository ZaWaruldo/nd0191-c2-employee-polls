// src/components/Home.js
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import PollCard from './PollCard.js'; // Create a PollCard component for each poll

const Home = () => {
  const [showAnswered, setShowAnswered] = useState(false);
  const authedUser = useSelector((state) => state.authedUser);
  const questions = useSelector((state) => state.questions);
  const users = useSelector((state) => state.users);

  // Get answered and unanswered polls
  const answeredPolls = Object.values(questions)
    .filter((question) => Object.keys(users[authedUser].answers).includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  const unansweredPolls = Object.values(questions)
    .filter((question) => !Object.keys(users[authedUser].answers).includes(question.id))
    .sort((a, b) => b.timestamp - a.timestamp);

  return (
    <div>
      <h2>Welcome! {authedUser}</h2>
      <h3 className="center">Your Polls</h3>
      <div className="center">
        <button onClick={() => setShowAnswered(false)} className={showAnswered ? '' : 'active'}>
          Unanswered Polls
        </button>
        <button onClick={() => setShowAnswered(true)} className={showAnswered ? 'active' : ''}>
          Answered Polls
        </button>
      </div>
      <ul className="poll-list">
        {showAnswered
          ? answeredPolls.map((poll) => (
              <li key={poll.id}>
                <PollCard poll={poll} />
              </li>
            ))
          : unansweredPolls.map((poll) => (
              <li key={poll.id}>
                <PollCard poll={poll} />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Home;
