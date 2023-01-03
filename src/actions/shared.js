import { getInitialData } from "../utils/api";
import { receiveUsers, addUserAnswer, addUserQuestion } from "./users";
import { receiveQuestions, addAnswer, addQuestion } from "./questions";
import { setauthedUser } from "./authedUser";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { saveQuestionAnswer, saveQuestion } from "../utils/api";
//import { setLoginDetails } from "../components/Loginpage";
export function handleInitialData() {
  // const AUTHED_ID = "tylermcginnis";
  //const AUTHED_ID = setLoginDetails;
  return (dispatch) => {
    dispatch(showLoading());
    return getInitialData().then(({ users, questions }) => {
      dispatch(receiveUsers(users));
      dispatch(receiveQuestions(questions));
      //dispatch(setauthedUser(AUTHED_ID));
      dispatch(hideLoading());
    });
  };
}

export function handleAddAnswer(id, answer) {
  // console.log(info, "handleAddAnswer");
  return (dispatch, getState) => {
    const { authedUser } = getState();
    //   console.log(authedUser, "authedUser");
    dispatch(showLoading());

    return (
      saveQuestionAnswer({
        authedUser,
        qid: id,
        answer,
      })
        // .then((result) => console.log(result))
        .then((savedAnswer) => {
          dispatch(addAnswer(authedUser, id, answer));
          dispatch(addUserAnswer(authedUser, id, answer));
          dispatch(hideLoading());
        })
    );
  };
}

export function handleAddQuestion(optionOneText, optionTwoText, author) {
  return (dispatch, getState) => {
    dispatch(showLoading());
    return saveQuestion({
      optionOneText,
      optionTwoText,
      author,
    }).then((question) => {
      dispatch(addQuestion(question));
      dispatch(addUserQuestion(question));
      dispatch(hideLoading());
    });
  };
}
