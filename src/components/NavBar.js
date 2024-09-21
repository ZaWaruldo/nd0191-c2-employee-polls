import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "../index.css";

const NavBar = ({ authedUser, users }) => {
  const loggedInUser = users[authedUser];

  return (
    <nav className="navbar">
      <ul className="navbar-list">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/add">Create Poll</Link>
        </li>
        <li className="navbar-user">
          {loggedInUser ? `Hello, ${loggedInUser.name}` : "Guest"}
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ authedUser, users }) => ({
  authedUser,
  users,
});

export default connect(mapStateToProps)(NavBar);
