import { connect } from "react-redux";
import { handleAddAnswer } from "../actions/shared";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };
  return ComponentWithRouterProp;
};
const Pollpage = (props) => {
  const navigate = useNavigate();
  console.log(props, "pollpage");
  const { dispatch, answeredkeys, poll, users } = props;
  console.log(dispatch, poll, "pollpagedispatch");
  const { id, author, timestamp, optionOne, optionTwo } = props.poll;
  console.log(users, "users in pollpage");
  console.log(
    users[author].answers,
    Object.keys(users[author].answers).length,
    optionOne.votes.length + optionTwo.votes.length,
    // users[author].answers.length,
    optionOne.votes.length,
    "id in pollpage"
  );

  // console.log(props, "in pollpage");
  // console.log(author, "author in pollpage");
  const answerPoll = (e, qid, answer) => {
    console.log(e, id, answer, "e,id, answer");
    dispatch(handleAddAnswer(qid, answer));
    // navigate("/");
  };
  return (
    <>
      {answeredkeys.includes(id) ? (
        <div className="middle">
          <h2 data-testid="author-name">Poll by {author}</h2>
          <hr />

          <div>
            <h3>{optionOne.text}</h3>

            {optionOne.votes.length === 0 ? (
              <h6>no one voted</h6>
            ) : (
              <>
                <h4>Voted by</h4>
                {optionOne.votes.map((name) => (
                  <h4 key={name}>{name}</h4>
                ))}
                <h4>Number of people voted :{optionOne.votes.length}</h4>
                <h4>
                  percentage:
                  {(optionOne.votes.length /
                    (optionOne.votes.length + optionTwo.votes.length)) *
                    100}
                </h4>
              </>
            )}
          </div>
          <hr />
          <div>
            <h3>{optionTwo.text}</h3>

            {optionTwo.votes.length === 0 ? (
              <h6>no one voted</h6>
            ) : (
              <>
                <h4>Voted by</h4>
                {optionTwo.votes.map((name) => (
                  <h4 key={name}>{name}</h4>
                ))}
                <h4>Number of people voted :{optionTwo.votes.length}</h4>
                <h4>
                  percentage:
                  {(optionTwo.votes.length /
                    (optionOne.votes.length + optionTwo.votes.length)) *
                    100}
                </h4>
              </>
            )}
          </div>
        </div>
      ) : (
        <div className="middle">
          <h3>Poll by {author}</h3>
          <h2>Would you Rather</h2>
          <div>
            <h3>{optionOne.text}</h3>
            <button onClick={(e) => answerPoll(e, id, "optionOne")}>
              click
            </button>
          </div>
          <div>
            <h3>{optionTwo.text}</h3>
            <button onClick={(e) => answerPoll(e, id, "optionTwo")}>
              click
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const mapStateToProps = ({ users, questions, authedUser }, props) => {
  const { id } = props.router.params;
  const poll = questions[id];
  const answeredkeys = Object.keys(users[authedUser].answers);
  return {
    poll,
    authedUser,
    answeredkeys,
    users,
  };
};
export default withRouter(connect(mapStateToProps)(Pollpage));
