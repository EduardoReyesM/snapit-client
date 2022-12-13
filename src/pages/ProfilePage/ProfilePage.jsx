import "./ProfilePage.css";
import {Link} from "react-router-dom"
import trashcan from "../../images/trash-can.png"
import {useContext} from "react"
import {AuthContext} from "../../context/auth.context"

function ProfilePage() {
    const {user} = useContext(AuthContext);
    console.log(user);
  return (
    // datos del usuario
    <div className="Profile-background-color">
          <div className="Profile-name-colom">
            <img src="" alt="img" width="50" />
            <p>Username:{user.name}</p>
            <p>Age:</p>
            <p>City:</p>
            <div>
                <input type="button" value="Edit" />
            </div>
          </div>
          {/* create post del usuario */}
          <div className="Post-profile-align">
              <p>POST</p>
                  <div className="post-align">
                      <form className="profile-post-form">
                          <input type="text" placeholder="whats on your mind" />               
                      </form>
                      <Link to="/explore" className="Post-color-match">Post</Link>
                  </div>
                  <div className="profile-post-botones">
                      <input type="file" id="" name="file" placeholder="upload"></input>
                      <Link to="/profile">
                       <img src={trashcan} alt="delete" width="20"/>
                      </Link>
                  </div>
                  {/* creando los post que a creado el usuario */}
                  <div className="Recent-posts-profile">
                      <h4>Recent Posts</h4>
                      <div>
                          <p>username:</p>
                          <img src="" alt="img" />
                      </div>
                      <div>
                          <p>description:</p>
                      </div>
                  </div>
                  <div className="link-prof-attach">
                    <a href="/events">Events</a> <a href="marketplace">Marketplace</a>
                 </div>
           </div>
    </div>
  );
}

export default ProfilePage;
