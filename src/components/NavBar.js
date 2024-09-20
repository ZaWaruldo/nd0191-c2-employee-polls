import { Link } from 'react-router-dom';

const NavBar = () => {

  
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li>
          <Link to="/add">Create Poll</Link>
        </li>
        <div>
          name
        </div>
      </ul>
    </nav>
  );
};

export default NavBar;
