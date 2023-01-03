import {
  RECEIVE_USERS,
  ADD_USERANSWER,
  ADD_USERQUESTION,
} from "../actions/users";

export default function users(state = {}, action) {
  switch (action.type) {
    case RECEIVE_USERS:
      return {
        ...state,
        ...action.users,
      };
    case ADD_USERANSWER: {
      const { authedUser, id, answer } = action;
      // console.log(
      //   authedUser,
      //   id,
      //   answer,
      //   state,
      //   "ADD_ANSWER in USER"
      // );

      return {
        ...state,
        [authedUser]: {
          ...state[authedUser],
          answers: {
            ...state[authedUser].answers,
            [id]: answer,
          },
        },
      };
    }

    case ADD_USERQUESTION: {
      const { question } = action;
      // console.log(author, id, optionOne, optionTwo, "newwwwwwwwwwwwww");
      return {
        ...state,
        [question.author]: {
          ...state[question.author],
          questions: state[question.author].questions.concat([question.id]),
        },
      };
    }

    default:
      return state;
  }
}
