// src/components/PollDetails.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { saveQuestionAnswer } from '../actions/questions';

const PollDetails = () => {
  const { question_id } = useParams();
  const question = useSelector((state) => state.questions[question_id]);
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  if (!question) {
    return <p>This poll doesn't exist!</p>;
  }

  const hasAnswered = Object.keys(users[authedUser].answers).includes(question.id);

  const handleVote = (option) => {
    dispatch(saveQuestionAnswer({
      authedUser,
      qid: question.id,
      answer: option
    }));
    navigate('/');
  };

  return (
    <div>
      <h3>Would You Rather</h3>
      <div>
        <h4>{question.optionOne.text}</h4>
        <h4>{question.optionTwo.text}</h4>
      </div>
      {!hasAnswered ? (
        <div>
          <button onClick={() => handleVote('optionOne')}>
            {question.optionOne.text}
          </button>
          <button onClick={() => handleVote('optionTwo')}>
            {question.optionTwo.text}
          </button>
        </div>
      ) : (
        <div>
          <h4>Results:</h4>
          <p>{question.optionOne.text}: {question.optionOne.votes.length} votes</p>
          <p>{question.optionTwo.text}: {question.optionTwo.votes.length} votes</p>
        </div>
      )}
    </div>
  );
};

export default PollDetails;
