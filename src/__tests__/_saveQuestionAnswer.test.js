import { _saveQuestionAnswer } from './_DATA';

describe('_saveQuestionAnswer', () => {
  it('should return true when correct data is passed', async () => {
    const answerData = {
      authedUser: 'user1',
      qid: 'question_id',
      answer: 'optionOne',
    };

    const result = await _saveQuestionAnswer(answerData);
    expect(result).toBe(true);
  });

  it('should throw an error if incorrect data is passed', async () => {
    const answerData = { authedUser: 'user1', answer: 'optionOne' }; // Missing qid
    await expect(_saveQuestionAnswer(answerData)).rejects.toEqual('Please provide authedUser, qid, and answer');
  });
});
