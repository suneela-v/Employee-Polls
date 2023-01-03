export function formatDate(timestamp) {
  const d = new Date(timestamp);
  const time = d.toLocaleTimeString("en-US");
  return time.substr(0, 5) + time.slice(-2) + " | " + d.toLocaleDateString();
}
export function formatQuestion(question, authedUser, authorFromUsers) {
  const { id, timestamp, author, optionOne, optionTwo } = question;
  // const { password, name, avatarURL, answers, questions } = authorFromUsers;
  // sarahedo: {
  //     id: "sarahedo",
  //     password: "password123",
  //     name: "Sarah Edo",
  //     avatarURL: null,
  //     answers: {
  //       "8xf0y6ziyjabvozdd253nd": "optionOne",
  //       "6ni6ok3ym7mf1p33lnez": "optionOne",
  //       am8ehyc8byjqgar0jgpub9: "optionTwo",
  //       loxhs1bqm25b708cmbf3g: "optionTwo",
  //     },
  //     questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
  // }

  return {
    id,
    timestamp,
    author,
    optionOne,
    optionTwo,
    hasAnswered:
      optionOne.votes.includes(authedUser) ||
      optionTwo.votes.includes(authedUser),

    //     id: generateUID(),
    //     timestamp: Date.now(),
    //     author,
    //     optionOne: {
    //       votes: [],
    //       text: optionOneText,
    //     },
    //     optionTwo: {
    //       votes: [],
    //       text: optionTwoText,
    //     },
  };
}
