import { connect } from "react-redux";
import { formatDate, formatQuestion } from "../utils/helpers";
import { NotAnswered } from "./NotAnswered";
import Done from "./Done";
const Poll = (props) => {
  //console.log(props);
  const {
    id,
    author,
    timestamp,
    optionOne,
    optionTwo,
    hasAnswered,

    //  unanswered,
  } = props.question;
  console.log(props.question);
  return (
    <>
      <div>
        <h5>answered</h5>
        <ul>
          {props.answered.map((qs) => (
            <li>
              <Done />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

const mapStateToProps = ({ questions, authedUser, users }, { id }) => {
  const question = questions[id];
  const answeredkeys = Object.keys(users[authedUser].answers);
  const answered = answeredkeys;
  return {
    authedUser,
    question: question ? formatQuestion(question, authedUser) : null,
    answered,
    // unanswered: Object.keys(questions).filter((val, ind) => !answered.has(val)),
    // answeredNo: answered.length,
  };
};

export default connect(mapStateToProps)(Poll);
