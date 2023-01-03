import { useState } from "react";
import { connect } from "react-redux";
// import { useNavigate } from "react-router-dom";
import { setauthedUser } from "../actions/authedUser";
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

const Loginpage = (props) => {
  const { users } = props;
  const [username, setUsername] = useState("");
  const [pwd, setPwd] = useState("");
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  console.log(
    props,
    props.router.location.pathname,
    "pathName",
    "loginpropssssssss"
  );
  const handleChangeForUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeForPwd = (e) => {
    setPwd(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    //console.log(props.locationPath, "in login submit");
    // if (props.router.location.pathname !== "/") {
    //   alert("404");
    //   navigate("/");
    //   return;
    // }
    let objForLogin = Object.entries(users).filter(
      ([key, value]) => key === username
    );

    if (objForLogin.length === 0) {
      // alert(objForLogin);
      setUsername("");
      setPwd("");
      // setError(false);
      // setSuccess(true);
      // alert(error);
      // alert(success);
      // alert("enter the details");
    }
    if (objForLogin.length && users[objForLogin[0][0]].password === pwd) {
      // setError(true);
      // setSuccess(false);
      // alert(error);
      // alert(success);
      // alert("correct credentials");
      props.dispatch(setauthedUser(username));
      let pathName = props.router.location.pathname;
      // if (pathName.includes("questions")) {
      //   console.log(props.router.location.pathname, pathName.substr(10));
      let qid = pathName.substr(11);
      let beginingQuestions = [
        "8xf0y6ziyjabvozdd253nd",
        "6ni6ok3ym7mf1p33lnez",
        "am8ehyc8byjqgar0jgpub9",
        "loxhs1bqm25b708cmbf3g",
        "vthrdm985a262al8qx3do",
        "xj352vofupe1dqz9emx13r",
      ];
      //  if (props.users[props.authedUser].answers.includes(qid)) {
      // alert(qid);
      console.log(
        props.users,
        Object.keys(users[username].answers),
        Object.keys(users[username].answers).includes(qid),
        beginingQuestions,
        beginingQuestions.includes(qid),
        qid,

        // props.users[props.authedUser],
        "newwwwwwwwwwwwwwwwwww propss in loginpage"
      );
      // }
      // }

      if (
        props.router.location.pathname === "/" ||
        props.router.location.pathname === "/add" ||
        props.router.location.pathname === "/leaderboard" ||
        // Object.keys(users[username].answers).includes(qid) ||
        beginingQuestions.includes(qid)

        // || props.users[username].answers.includes(qid)
      ) {
        // alert("in correctpath");
        let currentRoute = props.router.location.pathname;
        console.log(currentRoute, "currentRoute");
        navigate(`${currentRoute}`);
      } else {
        console.log(
          props.router.location.pathname,
          "props.router.location.pathname"
        );
        //  alert("notfound");
        navigate("/notfound");
      }
    }
    if (objForLogin.length && users[objForLogin[0][0]].password !== pwd) {
      setUsername("");
      setPwd("");
      // setError(true);
      // setSuccess(false);
      // alert(error);
      // alert("wrong credentials");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="middle">
          {/* {success && (
            <h4 data-testid="success-header">successfully logged in</h4>
          )}
          {error && <h4 data-testid="error-header1">username doesn't exist</h4>}
          */}
          <h3>Employee Polls</h3>

          <h4>Login</h4>

          <div>
            <select
              onChange={handleChangeForUsername}
              value={username}
              data-testid="username-select"
            >
              <option value="" disabled>
                Username
              </option>

              <option value="mtsamis">Mtsamis</option>
              <option value="sarahedo">sarahedo</option>
              <option value="tylermcginnis">tylermcginnis</option>
              <option value="zoshikanlu">zoshikanlu</option>
            </select>
            <select
              onChange={handleChangeForPwd}
              value={pwd}
              data-testid="input-pwd"
            >
              <option value="" disabled>
                Password
              </option>

              <option value="xyz123">xyz123</option>
              <option value="password123">password123</option>
              <option value="abc321">abc321</option>
              <option value="pass246">pass246</option>
            </select>
            {/* <input
              className="inputdesign"
              placeholder="username"
              onChange={handleChangeForUsername}
              value={username}
            /> */}
            {/* <input
              className="inputdesign"
              placeholder="password"
              onChange={handleChangeForPwd}
              value={pwd}
              data-testid="input-pwd"
            /> */}
          </div>
          <button data-testid="submit-button">Submit</button>
        </div>
      </form>
    </>
  );
};
// const mapStateToProps = ({ questions, authedUser, users }) => {
//   return { questions, authedUser, users };
// };
// export default connect(mapStateToProps)(Loginpage);

const mapStateToProps = ({ questions, authedUser, users }, props) => {
  const { id } = props.router.params;
  const { locationPath } = props.router.location.pathname;
  return { id, questions, authedUser, users, locationPath };
};
export default withRouter(connect(mapStateToProps)(Loginpage));
