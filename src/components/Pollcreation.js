import { connect } from "react-redux";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { handleAddQuestion } from "../actions/shared";
import Nav from "./Nav";
const Pollcreation = (props) => {
  console.log(props, "CREATIONCREATION");
  const { authedUser, dispatch } = props;
  const navigate = useNavigate();
  const [optionOnetext, setOptionOnetext] = useState("");
  const [optionTwotext, setOptionTwotext] = useState("");

  const handleChangeInOptionOne = (e) => {
    const optionOnetext = e.target.value;
    setOptionOnetext(optionOnetext);
  };
  const handleChangeInOptionTwo = (e) => {
    const optionTwotext = e.target.value;
    setOptionTwotext(optionTwotext);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(handleAddQuestion(optionOnetext, optionTwotext, authedUser));
    navigate("/");
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="middle">
          <h3 data-testid="pollheader-id">Would you rather</h3>

          <h5>Create your own poll</h5>
          <div>
            <label>First option</label>
            <input value={optionOnetext} onChange={handleChangeInOptionOne} />
          </div>
          <div>
            <label>Second option</label>
            <input value={optionTwotext} onChange={handleChangeInOptionTwo} />
          </div>
          <button>Submit</button>
        </div>
      </form>
    </>
  );
};
const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};
export default connect(mapStateToProps)(Pollcreation);
