import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS";
export const ADD_ANSWER = "ADD_ANSWER";
export const ADD_QUESTION = "ADD_QUESTION";
export function receiveQuestions(questions) {
  return {
    type: RECEIVE_QUESTIONS,
    questions,
  };
}

export function addAnswer(authedUser, id, answer) {
  return {
    type: ADD_ANSWER,
    authedUser,
    id,
    answer,
  };
}

// export function handleAddAnswer(id, answer) {
//   // console.log(info, "handleAddAnswer");
//   return (dispatch, getState) => {
//     const { authedUser } = getState();
//     //   console.log(authedUser, "authedUserrrrrrrrrrrrrrrrrrrrrrrr");
//     dispatch(showLoading());
//     return (
//       saveQuestionAnswer({
//         authedUser,
//         qid: id,
//         answer,
//       })
//         //instead of console we need to call addAnswer()
//         // .then((result) => console.log(result))
//         .then((savedAnswer) => dispatch(addAnswer(authedUser, id, answer)))
//     );
//   };
// }
export function addQuestion(question) {
  return {
    type: ADD_QUESTION,
    question,
  };
}
