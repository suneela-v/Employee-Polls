import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import PollContainer from "./PollContainer";
import Loginpage from "./Loginpage";
import Pollcreation from "./Pollcreation";
import LoadingBar from "react-redux-loading-bar";
import Leaderboard from "./Leaderboard";
import Pollpage from "./Pollpage";
import Nav from "./Nav";
import Notfound from "./Notfound";
import Logout from "./Logout";
import NewpollContainer from "./NewpollContainer";
import { Routes, Route } from "react-router-dom";

const App = (props) => {
  const { dispatch } = props;
  console.log(props, "props in Apppppppppppppppppp");
  useEffect(() => {
    dispatch(handleInitialData());
  }, []);

  return (
    <div>
      {props.authedUser === null ? (
        <div>
          <Loginpage />
        </div>
      ) : (
        <Fragment>
          <LoadingBar />
          <Nav />
          <div className="container">
            {props.loading === true ? null : (
              <Routes>
                {/* <Route path="/" exact element={<Loginpage />} /> */}
                <Route path="/login" exact element={<Loginpage />} />
                {/* <Route path="/" element={<PollContainer />} /> */}
                <Route path="/" element={<NewpollContainer />} />
                <Route path="/questions/:id" element={<Pollpage />} />
                <Route path="/add" element={<Pollcreation />} />
                <Route path="/leaderboard" element={<Leaderboard />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/notfound" element={<Notfound />} />
              </Routes>
            )}
          </div>
        </Fragment>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
  authedUser,
});
export default connect(mapStateToProps)(App);
