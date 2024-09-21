import { _saveQuestionAnswer } from '../_DATA';

describe('_saveQuestionAnswer', () => {
  it('should return true when correctly formatted data is passed', async () => {
    const answer = {
      authedUser: 'user1',
      qid: 'question1',
      answer: 'optionOne'
    };

    const result = await _saveQuestionAnswer(answer);
    expect(result).toBe(true);
  });

  it('should throw an error if incorrect data is passed', async () => {
    const badData = {};

    await expect(_saveQuestionAnswer(badData)).rejects.toEqual('Please provide authedUser, qid, and answer');
  });
});
