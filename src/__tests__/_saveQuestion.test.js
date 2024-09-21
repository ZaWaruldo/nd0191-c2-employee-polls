import { _saveQuestion } from "../_DATA";

describe("_saveQuestion", () => {
  it("should return the saved question when correctly formatted data is passed", async () => {
    const question = {
      optionOneText: "Option 1",
      optionTwoText: "Option 2",
      author: "user1",
    };

    const result = await _saveQuestion(question);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("timestamp");
    expect(result).toHaveProperty("author", "user1");
    expect(result).toHaveProperty("optionOne.text", "Option 1");
    expect(result).toHaveProperty("optionTwo.text", "Option 2");
  });

  it("should throw an error if incorrect data is passed", async () => {
    const question = {
      optionOneText: "",
      optionTwoText: "Option 2",
      author: "user1",
    };

    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
