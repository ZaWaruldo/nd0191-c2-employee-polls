
import { _saveQuestion } from './_DATA';

describe('_saveQuestion', () => {
  it('should return the saved question with all expected fields populated', async () => {
    const question = {
      optionOneText: 'Option One',
      optionTwoText: 'Option Two',
      author: 'author',
    };

    const result = await _saveQuestion(question);
    expect(result).toEqual(expect.objectContaining({
      id: expect.any(String),
      author: question.author,
      optionOne: expect.any(Object),
      optionTwo: expect.any(Object),
      timestamp: expect.any(Number),
    }));
  });

  it('should throw an error if incorrect data is passed', async () => {
    const question = { author: 'author' }; // Missing required fields
    await expect(_saveQuestion(question)).rejects.toEqual('Please provide optionOneText, optionTwoText, and author');
  });
});
