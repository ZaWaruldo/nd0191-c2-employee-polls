// src/components/PollCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const PollCard = ({ poll }) => {
  return (
    <div className="poll-card">
      <h4>{poll.author} asks:</h4>
      <p>Would you rather</p>
      <p>{poll.optionOne.text} or {poll.optionTwo.text}?</p>
      <Link to={`/questions/${poll.id}`}>
        View Poll
      </Link>
    </div>
  );
};

export default PollCard;
