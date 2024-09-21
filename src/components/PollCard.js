// src/components/PollCard.js
import React from 'react';
import { Link } from 'react-router-dom';

const PollCard = ({ poll }) => {
  return (
    <div className="bg-white shadow-md p-4 rounded-lg mb-4">
      <h4 className="font-semibold text-lg">{poll.author} asks:</h4>
      <p className="text-gray-700">Would you rather</p>
      <p className="text-blue-500">{poll.optionOne.text} or {poll.optionTwo.text}?</p>
       <Link to={`/questions/${poll.id}`}>
        View Poll
      </Link>
    </div>
  );
};

export default PollCard;
