// src/components/NewPoll.js
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { _saveQuestion } from '../_DATA';
import { receiveQuestions } from '../actions/questions';

const NewPoll = () => {
  const [optionOne, setOptionOne] = useState('');
  const [optionTwo, setOptionTwo] = useState('');
  const authedUser = useSelector((state) => state.authedUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const question = {
      optionOneText: optionOne,
      optionTwoText: optionTwo,
      author: authedUser
    };

    // Save the new poll
    _saveQuestion(question).then((formattedQuestion) => {
      dispatch(receiveQuestions({ [formattedQuestion.id]: formattedQuestion }));
      navigate('/');
    });
  };

  return (
    <div>
      <h3>Create a New Poll</h3>
      <h4>Would you Rather...</h4>
      <form onSubmit={handleSubmit}>
        <label>
          Option One:
          <input
            type="text"
            value={optionOne}
            onChange={(e) => setOptionOne(e.target.value)}
            required
          />
        </label>
        <label>
          Option Two:
          <input
            type="text"
            value={optionTwo}
            onChange={(e) => setOptionTwo(e.target.value)}
            required
          />
        </label>
        <button type="submit" disabled={!optionOne || !optionTwo}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewPoll;
