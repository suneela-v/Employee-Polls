import { showLoading, hideLoading } from "react-redux-loading-bar";

export const RECEIVE_USERS = "RECEIVE_USERS";
export const ADD_USERANSWER = "ADD_USERANSWER";
export const ADD_USERQUESTION = "ADD_USERQUESTION";
export function receiveUsers(users) {
  return {
    type: RECEIVE_USERS,
    users,
  };
}

export function addUserAnswer(authedUser, id, answer) {
  return {
    type: ADD_USERANSWER,
    authedUser,
    id,
    answer,
  };
}

export function addUserQuestion(question) {
  return {
    type: ADD_USERQUESTION,
    question,
  };
}
// export function handleAddUserAnswer(id, answer) {
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
//         .then((savedAnswer) => dispatch(addUserAnswer(authedUser, id, answer)))
//     );
//   };
// }
