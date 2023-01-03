import { useNavigate, Link } from "react-router-dom";
import Loginpage from "./Loginpage";
import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { setauthedUser } from "../actions/authedUser";
const Logout = (props) => {
  const navigate = useNavigate();
  useEffect(() => {
    props.dispatch(setauthedUser(null));
    navigate("/login");
  }, []);
  //   const handleClick = () => {
  //     props.dispatch(setauthedUser(null));
  //   };

  //props.dispatch(setauthedUser(null));
  return <></>;
};

export default connect()(Logout);
