import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { setauthedUser } from "../actions/authedUser";
import { connect } from "react-redux";
import Loginpage from "./Loginpage";
const Nav = (props) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    props.dispatch(setauthedUser(null));
  };
  return (
    <nav className="nav">
      <ul>
        <li>
          <Link to="/" data-testid="home-id">
            Home
          </Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/add">New Poll</Link>
        </li>
        <li>
          <span>{props.authedUser}</span>
        </li>
        <li>
          <Link to="/logout">Logout</Link>
        </li>
      </ul>
      <hr />
    </nav>
  );
};
const mapStateToProps = ({ authedUser }) => {
  return {
    authedUser,
  };
};
export default connect(mapStateToProps)(Nav);
