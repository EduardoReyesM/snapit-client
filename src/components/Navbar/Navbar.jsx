import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import img3 from "../../images/logo-back.png"

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
 const Location = useLocation();
 console.log(Location)

 const {pathname} = Location;

  return (
    
    <nav className="nav-setup">
      <div className="Snapi_logos">
            <div className="Snapit-logo">
                <h3 className="Snapit-color">SNAPIT</h3>
                <img src={img3} width="50px" />
            </div>
           </div> 
     
     

      {isLoggedIn && (
        <>
          <button onClick={logOutUser} className="Nav-color">Logout</button>

          <Link to="/profile">
            <button className="Nav-color">Profile</button>
            {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
          </Link>
          
          <span className="nabvar-span-user">{user && user.name}</span>
          
          {Location?.pathname != "/sellonline" && (
          <Link to="/sellonline"></Link>
          ) }
          {Location?.pathname != "/newevent" && (
          <Link to="/newevent"></Link>
          ) }
        </>
      )}

      {!isLoggedIn && (
        <>
          {
        Location?.pathname != "/" && (
        <Link to="/">
        <button className="Nav-color">Home</button>
      </Link>
       )
      }
          {
          pathname != "/explore" && (
          <Link to="/explore">
          {" "}
          <button className="Nav-color" >Explore</button>{" "}
        </Link>) 
          }
          {
            pathname != "/signup" && (
            <Link to="/signup">
            {" "}
            <button className="Nav-color">Sign Up</button>{" "}
            </Link>
            )
          }
          {
            (pathname != "/login" /*|| pathname !="/" */ ) && (
            <Link to="/login">
            {" "}
            <button className="Nav-color">Login</button>{" "}
            </Link>
            )
          }
          
        </>
      )}
    </nav>
  );
}

export default Navbar;
