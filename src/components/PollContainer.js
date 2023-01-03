import { connect } from "react-redux";
import { formatDate, formatQuestion } from "../utils/helpers";
import NotAnswered from "./NotAnswered";
import Done from "./Done";
import Nav from "./Nav";
const PollContainer = (props) => {
  console.log(props, "pollcontainer");
  const {
    authedUser,
    answered,
    unanswered,
    unansweredNo,
    answeredNo,
    sortedAnsweredQs,
    sortedUnansweredQs,
  } = props;
  // console.log(
  //   authedUser,
  //   answered,
  //   sortedAnsweredQs,
  //   unanswered,
  //   sortedUnansweredQs,

  //   "pollcontainer"
  // );
  return (
    <>
      {answeredNo ? (
        <div style={{ textAlign: "center" }}>
          <h2>answered</h2>
          <ul>
            {sortedAnsweredQs.map((qs) => (
              <li>
                <Done qs={qs} />
              </li>
            ))}
          </ul>
        </div>
      ) : null}
      {unansweredNo && (
        <div style={{ textAlign: "center" }}>
          <h2>not answered</h2>
          <ul>
            {sortedUnansweredQs.map((qs) => (
              <li>
                <NotAnswered qs={qs} />
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ questions, authedUser, users }) => {
  const answeredkeys = Object.keys(users[authedUser].answers);
  const answered = answeredkeys;
  const sortedAnsweredQs = answered?.sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  const unanswered = Object.keys(questions).filter(
    (val, ind) => !answered.includes(val)
  );
  const unansweredKeys = unanswered;
  const sortedUnansweredQs = unansweredKeys?.sort(
    (a, b) => questions[b].timestamp - questions[a].timestamp
  );
  return {
    authedUser,
    answered,
    unanswered,
    answeredNo: answered.length,
    unansweredNo: unanswered.length,
    sortedAnsweredQs,
    sortedUnansweredQs,
  };
};

export default connect(mapStateToProps)(PollContainer);
