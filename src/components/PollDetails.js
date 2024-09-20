// src/components/PollDetails.js
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { _saveQuestionAnswer } from '../_DATA';  // Use this method to save the user's answer

const PollDetails = () => {
  const { question_id } = useParams();
  const question = useSelector((state) => state.questions[question_id]);
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!question) {
    return <p>This poll doesn't exist!</p>;
  }

  const handleVote = (answer) => {
    dispatch(_saveQuestionAnswer({
      authedUser,
      qid: question.id,
      answer
    }));
    navigate('/');  // Redirect back to home after voting
  };

  return (
    <div className="poll-details">
      <h3>Would you rather...</h3>
      <button onClick={() => handleVote('optionOne')}>{question.optionOne.text}</button>
      <button onClick={() => handleVote('optionTwo')}>{question.optionTwo.text}</button>
    </div>
  );
};

export default PollDetails;
