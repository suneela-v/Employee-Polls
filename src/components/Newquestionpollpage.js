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
const Newquestionpollpage = (props) => {
  const navigate = useNavigate();
  // console.log(props, "pollpage");
  const { dispatch } = props;
  // console.log(dispatch, "pollpagedispatch");
  const { id, author, timestamp, optionOne, optionTwo } = props.poll;

  // console.log(props, "in pollpage");
  // console.log(author, "author in pollpage");
  const answerPoll = (e, qid, answer) => {
    console.log(e, id, answer, "e,id, answer");
    dispatch(handleAddAnswer(qid, answer));
    navigate("/");
  };
  return (
    <>
      <div className="middle">
        <h3>Poll by {author}</h3>
        <h4>Would you rather</h4>
        <div>
          <h3>{optionOne.text}</h3>
          <button onClick={(e) => answerPoll(e, id, "optionOne")}>click</button>
        </div>
        <div>
          <h3>{optionTwo.text}</h3>
          <button onClick={(e) => answerPoll(e, id, "optionTwo")}>click</button>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = ({ sers, questions, authedUser }, props) => {
  const { id } = props.router.params;
  const poll = questions[id];
  return {
    poll,
  };
};
export default withRouter(connect(mapStateToProps)(Newquestionpollpage));
