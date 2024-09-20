// src/actions/questions.js
import { _saveQuestionAnswer } from '../_DATA';
import { receiveUsers } from './users';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER';

// Action to receive questions
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

// Action to save question answer
export function saveQuestionAnswer({ authedUser, qid, answer }) {
  return (dispatch) => {
    return _saveQuestionAnswer({ authedUser, qid, answer }).then(() => {
      dispatch({
        type: SAVE_QUESTION_ANSWER,
        authedUser,
        qid,
        answer,
      });
      dispatch(receiveUsers());
    });
  };
}
