import Auth from "../../utils/auth";
import { Link } from "react-router-dom";
import './nav.css'

function Nav() {

  function showNavigation() {
    return (
    Auth.loggedIn() ? (
      <ul className="flex-row">
        <li className="mx-1">
          {/* this is not using the Link component to logout or user and then refresh the application to the start */}
          <a href="/" onClick={() => Auth.logout()}>
              Logout
            </a>
        </li>

      </ul>
    ) : (

    <ul className="flex-row">
      <li className="mx-1">
        <Link to="/signup">
          Signup
        </Link>
      </li>
      <li className="mx-1">
        <Link to="/login">
          Login
        </Link>
      </li>
    </ul>
  )
  )
  }



  return (
    <header className="flex-row px-1">
      <h1>
        SouthEastWheels
      </h1>

      <nav>
        {showNavigation()}
      </nav>
    </header>
  );
}

export default Nav;
