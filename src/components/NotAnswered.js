import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { Pollpage } from "./Pollpage";
import { Link, useNavigate } from "react-router-dom";
const NotAnswered = (props) => {
  const { id, author, timestamp, optionOne, optionTwo } = props.question;
  const navigate = useNavigate();

  const showPoll = (e, id) => {
    e.preventDefault();
    console.log(id, "in showpoll");
    navigate(`/questions/${id}`);
  };
  return (
    <>
      <h5>{author}</h5>
      <h6>{formatDate(timestamp)}</h6>
      <button onClick={(e) => showPoll(e, id)}>show</button>
    </>
  );
};

const mapStateToProps = ({ users, questions }, { qs }) => {
  const question = questions[qs];

  return {
    question,
  };
};
export default connect(mapStateToProps)(NotAnswered);
