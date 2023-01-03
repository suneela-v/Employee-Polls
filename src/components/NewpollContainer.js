import { connect } from "react-redux";
import { formatDate, formatQuestion } from "../utils/helpers";
import { useState } from "react";
import NotAnswered from "./NotAnswered";
import Done from "./Done";
import Nav from "./Nav";
const NewpollContainer = (props) => {
  console.log(props, "pollcontainer");
  const [newones, setNewones] = useState(true);

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
  const handleClick = (e) => {
    setNewones(!newones);
  };
  function generateUID() {
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }
  return (
    <>
      {
        newones ? (
          //  unansweredNo &&
          // <>
          unansweredNo ? (
            <>
              <div style={{ textAlign: "center" }}>
                <h2>New questions</h2>
                <ul>
                  {sortedUnansweredQs.map((qs) => {
                    const { id, timestamp } = qs;
                    return (
                      <li key={generateUID()}>
                        <NotAnswered qs={qs} />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <button onClick={handleClick}>Answered</button>
            </>
          ) : (
            <>
              <h4>All Are Answered</h4>
              <div style={{ textAlign: "center" }}>
                <h2>Answered</h2>
                <ul>
                  {sortedAnsweredQs.map((qs) => {
                    const { id, timestamp } = qs;
                    return (
                      <li key={generateUID()}>
                        <Done qs={qs} />
                      </li>
                    );
                  })}
                </ul>
              </div>
            </>
          )
        ) : (
          //
          //  </>
          //
          // <>
          answeredNo && (
            <>
              <div style={{ textAlign: "center" }}>
                <h2>Answered</h2>
               
                <ul>
                  {sortedAnsweredQs.map((qs) => {
                    const { id, timestamp } = qs;
                    return (
                      <li key={generateUID()}>
                        <Done qs={qs} />
                      </li>
                    );
                  })}
                </ul>
              </div>
              <button onClick={handleClick}>Newquestions</button>
            </>
          )
        )
        //
        // </>
      }
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

export default connect(mapStateToProps)(NewpollContainer);
