import VisualArt from "../assets/visualart.png";
import CreativeCoding from "../assets/creativecoding.png";
import Projects from "../assets/projects_light.png";
import { Link } from "react-router-dom";

export default function Hero() { 
  const style_ = {
    // background: "red"
  }
  return (
    <div>
      <div className="container d-flex justify-content-center">
        <div className="welcome-text">
          <h2>Welcome To Ian Wright's</h2> 
          <br />
          <p>You are welcome to explore the intersection of <i>Art</i>, <i>Technology</i> and <i>Humanity</i>.</p> 
          <br />
        </div>
      </div>
      <div className="hero d-flex justify-content-center">
        <div className="row d-flex justify-content-around">
          <div className="col-lg-6 col-sm-12 col-md-12 mb-5">
            <Link className="linkCards" to="/visual-art">
              <div className="heroCard black m-auto card-animation">
                <div className="heroCardItem">
                  <div className="img-container">
                    <img src={VisualArt} alt="" />
                  </div>
                  <h1 className="title">Visual Art</h1>
                  <div className="line"></div>
                  <p className="desc">Explore stunning pieces of art, \\\///</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-lg-6 col-sm-12 col-md-12 mb-5">
            <Link className="linkCards" to="/creative-coding">
              <div className="heroCard blue m-auto card-animation">
                <div className="heroCardItem">
                  <div className="img-container">
                    <img src={CreativeCoding} alt="" />
                  </div>
                  <h1 className="title">Creative Coding</h1>
                  <div className="line"></div>
                  <p className="desc">
                    Creations, explorations, experiments done using algorithms.
                  </p>
                </div>
              </div>
            </Link>
          </div>

          {/* <div className="col-lg-4 col-sm-12 col-md-12 mb-5">
            <Link className="linkCards" to="/apps">
              <div className="heroCard yellow m-auto card-animation">
                <div className="heroCardItem">
                  <div className="img-container">
                    <img src={Projects} alt="" />
                  </div>
                  <h1 className="title">Apps</h1>
                  <div className="line"></div>
                  <p className="desc">
                    Projects that may or may not solve a problem for humanity.
                  </p>
                </div>
              </div>
            </Link>
          </div> */}

        </div>

        <div className="hero-line"></div>
      </div>
    </div>
  );
}
