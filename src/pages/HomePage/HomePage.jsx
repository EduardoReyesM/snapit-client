import "./HomePage.css";
import img1 from "../../images/logo-back.png"
import img2 from "../../images/Mcbook.png"
function HomePage() {
  return (
    <div className="Home-title">
       <div className="Home-h1">
          <h1>
            Share Your Moments
          </h1>
       </div>
        <div className="Home-images">
          <img src={img1} width="350" />
          <img src={img2} width="500" />
        </div>
        <div className="footer">
            <h2>@Copyright Made By Eduardo</h2>
        </div>
    </div>
     
  );
}

export default HomePage;
