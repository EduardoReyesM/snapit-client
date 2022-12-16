import "./HomePage.css";
import img7 from "../../images/sellproduct.png"
import img6 from"../../images/newevento.webp"
import img8 from "../../images/postP.png"
function HomePage() {
  return (
    <div className="Home-title">
       <div className="Home-h1">
          <h1>
            Share Your Moments
          </h1>
       </div>
        <div className="Home-images">
            <img className="imagen-perfil" src={img6} width="250" alt="img" /> 
            <div className="juan"><img className="imagen-perfil-echo" src={img7} width="250" alt="img"/></div>
            <div className="chu"><img className="imagen-perfil-echo" src={img8} width="250" alt="img"  /></div>
         </div>
         
        <div className="footer">
            <h2>@Copyright Made By Eduardo</h2>
        </div>
    </div>
     
  );
}

export default HomePage;
