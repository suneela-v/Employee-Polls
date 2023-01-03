import { RECEIVE_QUESTIONS } from "../actions/questions";
import { ADD_ANSWER } from "../actions/questions";
import { ADD_QUESTION } from "../actions/questions";
export default function questions(state = {}, action) {
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      console.log(RECEIVE_QUESTIONS, "RECEIVE_QUESTIONS");
      return {
        ...state,
        ...action.questions,
      };
    case ADD_ANSWER: {
      // console.log(ADD_ANSWER, "ADD_ANSWER IN ANS");

      const { authedUser, id, answer } = action;
      // console.log(authedUser, id, answer, "ADD_ANSWER");
      return {
        ...state,
        [id]: {
          ...state[id],
          [answer]: {
            ...state[id][answer],
            votes: state[id][answer].votes.concat([authedUser]),
          },
        },
      };
    }
    case ADD_QUESTION: {
      const { question } = action;
      return {
        ...state,
        [question.id]: question,
      };
    }
    default:
      return state;
  }
}
