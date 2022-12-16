import "./ProfilePage.css";
import {useNavigate} from "react-router-dom"
import trashcan from "../../images/trash-can.png"
import {useContext} from "react"
import {AuthContext} from "../../context/auth.context"
import axios from "axios";
import {useState, useEffect} from "react"

const API_URL = process.env.REACT_APP_SERVER_URL || "http://localhost:5005"



function ProfilePage() {
  const {user} = useContext(AuthContext);
  const [description,setDescription] = useState("")
  const [picture,setPicture] = useState("")
  const [posts, setPosts] = useState([])
  

  const navigate = useNavigate()
  
  const registerPost = () => {
    axios.post(`${API_URL}/api/post`,{
      description,
      picture,
      user: user._id})
    .then(response => navigate("/explore"))
    .catch(console.log)
  }


  const getPosts = () => {
    axios.get(`${API_URL}/api/post/user/${user._id}`)
    .then((response) => {
      console.log(response);
      setPosts(response.data)
    })
    .catch((err) => console.log(err));
  }  
  useEffect(() => {
    getPosts()
  }, [])
  
  //delete post
   const deletePost =  () => {
  //   axios.post(`${API_URL}/api/post`,{
  //     description,
  //     picture,
  //     user: user._id})
  //   .then(response => navigate("/post"))
  //   .catch(console.log)
   }
  // useEffect(() => {
  //   getPosts()
   //}, [])

  
  return (
    // datos del usuario
    <div className="Profile-background-color">
          <div className="Profile-name-colom">
            <img src={user.picture} alt="img" width="50" />
            <p>Username:{user.name}</p>
            <div>
                <input type="button" value="Edit" />
            </div>
          </div>
          {/* create post del usuario */}
          <div className="Post-profile-align">
              <p>POST</p>
                  <div className="post-align">
                      <div className="profile-post-form">
                          <input type="text" placeholder="whats on your mind" 
                          value={description} 
                          onChange={(e) => setDescription(e.target.value)}/>               
                      </div>
                      <button 
                        className="Post-color-match"
                        onClick={registerPost}
                      >Post</button>
                  </div>
                  <div className="profile-post-botones">
                      <input type="text" id="" name="file" placeholder="upload" 
                      value={picture}
                      onChange={(e) => setPicture(e.target.value)}
                      />                                                             
                  </div>
                  {/* creando los post que a creado el usuario */}
                  {posts.map(post => {
                     <h4>Recent Posts</h4>
                  return <div className="Recent-posts-profile">                     
                          <p className="post-userN">Username:{user.user}</p>
                          <img className="image-post-user" src={post.picture} alt="img" width="100px" />                                         
                          <p className="des-user-post">Description: {post.description}</p>  
                          <button onClick={deletePost}><img src={trashcan} alt="delete" width="20"/></button>                   
                        </div>
                    })}

                  <div className="link-prof-attach">
                    <a href="/events">Events</a> <a href="marketplace">Marketplace</a>
                 </div>
           </div>
    </div>
  );
}

export default ProfilePage;
