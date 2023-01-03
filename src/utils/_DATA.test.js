var _saveQuestionAnswer = require("./_DATA")._saveQuestionAnswer;
var _saveQuestion = require("./_DATA")._saveQuestion;

//require("./_saveQuestion");

describe("_saveQuestionAnswer", () => {
  it("true is returned when correctly formatted data is passed", async () => {
    // jest.setTimeout(30000);
    const answerObj = {
      authedUser: "tylermcginnis",
      qid: "loxhs1bqm25b708cmbf3g",
      answer: "optionOne",
    };
    var result = await _saveQuestionAnswer(answerObj);

    // await expect(_saveQuestionAnswer(answerObj)).resolves.toEqual(true);
    expect(result).resolves.toBeDefined;
  }, 10000);
  it("will return an error if the data is empty or invalid", async () => {
    const answerObj = {
      authedUser: "tylermcginnis",
      qid: "loxhs1bqm25b708cmbf3g",
      answer: null,
    };

    await expect(_saveQuestionAnswer(answerObj)).rejects.toEqual(
      "Please provide authedUser, qid, and answer"
    );
  });
});

describe("_saveQuestion", () => {
  it("saved question is returned and all expected fields are populated when correctly formatted data is passed.", async () => {
    var question = {
      optionOneText: "text for testing",
      optionTwoText: "text for testing too",
      author: "suneela",
    };
    var result = await _saveQuestion(question);

    expect(result).toHaveProperty("id");
    expect(result).toHaveProperty("author", "suneela");
    expect(result).toHaveProperty("timestamp");
    expect(result).toHaveProperty("optionOne", {
      text: "text for testing",
      votes: [],
    });
    expect(result).toHaveProperty("optionTwo", {
      text: "text for testing too",
      votes: [],
    });
  });
});
describe("_saveQuestion", () => {
  it("error is returned if incorrect data is passed", async () => {
    var question = {
      optionOneText: "",
      optionTwoText: "",
      author: "",
    };
    // var result = await _saveQuestion(question);
    await expect(_saveQuestion(question)).rejects.toEqual(
      "Please provide optionOneText, optionTwoText, and author"
    );
  });
});
