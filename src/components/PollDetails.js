// src/components/PollDetails.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { saveQuestionAnswer } from '../actions/questions';

const PollDetails = () => {
  const { question_id } = useParams();
  const question = useSelector((state) => state.questions[question_id]);
  const authedUser = useSelector((state) => state.authedUser);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  if (!question) { return <p>This poll doesn't exist!</p>; }

  const hasAnswered = users[authedUser].answers.hasOwnProperty(question.id);
  const totalVotes = question.optionOne.votes.length + question.optionTwo.votes.length;

  const handleVote = (option) => {
    dispatch(saveQuestionAnswer({ authedUser, qid: question.id, answer: option, }));
  };

  const renderResults = () => (
    <div>
      <h3>Poll Results</h3>
      <div className={`poll-option ${question.optionOne.votes.includes(authedUser) ? 'selected' : ''}`}>
        <p>{question.optionOne.text}</p>
        <p>{question.optionOne.votes.length} out of {totalVotes} votes</p>
        <p>{((question.optionOne.votes.length / totalVotes) * 100).toFixed(2)}%</p>
      </div>

      <div className={`poll-option ${question.optionTwo.votes.includes(authedUser) ? 'selected' : ''}`}>
        <p>{question.optionTwo.text}</p>
        <p>{question.optionTwo.votes.length} out of {totalVotes} votes</p>
        <p>{((question.optionTwo.votes.length / totalVotes) * 100).toFixed(2)}%</p>
      </div>

    </div>
  );

  const renderVoting = () => (
    <div>
      <h3>Would You Rather...</h3>
      <button onClick={() => handleVote('optionOne')}>{question.optionOne.text}</button>
      <button onClick={() => handleVote('optionTwo')}>{question.optionTwo.text}</button>
    </div>
  );

  return <div>{hasAnswered ? renderResults() : renderVoting()}</div>;
};

export default PollDetails;
