import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
 const Location = useLocation();
 console.log(Location)

  return (
    <nav className="nav-setup">
      {
        Location?.pathname != "/" && (
        <Link to="/">
        <button>Home</button>
      </Link>
)
      }
     

      {isLoggedIn && (
        <>
          <button onClick={logOutUser}>Logout</button>

          <Link to="/profile">
            <button>Profile</button>
            {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
          </Link>

          <span>{user && user.name}</span>
        </>
      )}

      {!isLoggedIn && (
        <>
          <Link to="/explore">
            {" "}
            <button >Explore</button>{" "}
          </Link>
          <Link to="/signup">
            {" "}
            <button >Sign Up</button>{" "}
          </Link>
          <Link to="/login">
            {" "}
            <button >Login</button>{" "}
          </Link>
        </>
      )}
    </nav>
  );
}

export default Navbar;
