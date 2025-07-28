import CreativeCodingImage from "../assets/creativecoding.png";
import VisualArtImage from "../assets/visualart1.jpeg";
import Projects from "../assets/projects_light.png";
import { Link } from "react-router-dom";
import Featured from "./Featured";

export default function Hero() { 
  const style_ = {
    // background: "red"
  }
  return (
    <div>
      <div className="container d-flex justify-content-center mb-3">
        <div className="welcome-text">
          <h2>
              IAN WRIGHT 
              <span className="subscriptLink">
                <a href="/about">(about)</a>
              </span>
            </h2> 
          {/* <br /> */}
          {/* <p>You are welcome to explore the intersection of <i>Art</i>, <i>Technology</i> and <i>Humanity</i>.</p>  */}
        </div>
      </div>
      
      <div className="container mb-5">
        <div className="row d-flex justify-content-center">
          <div className="col-sm-12 col-md-12 col-lg-3 d-flex justify-content-center m-2">
            <Link className="linkCards" to="/latest">
              <button className="btn bg-primary text-light custom-cta more-priority-btn">
                Latest Work &nbsp;&nbsp;
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3 d-flex justify-content-center m-2"> 
            <Link className="linkCards" to="/visual-art">
              <button className="btn bg-info text-light custom-cta medium-priority-btn">
                Available Work &nbsp;&nbsp;
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </Link>
          </div>
          <div className="col-sm-12 col-md-12 col-lg-3  d-flex justify-content-center m-2">
            <Link className="linkCards" to="/creative-coding/gen-art/wips">
              <button className="btn bg-secondary text-light custom-cta less-priority-btn">
                Work In Progress &nbsp;&nbsp;
                <i className="fa-solid fa-arrow-up-right-from-square"></i>
              </button>
            </Link>
          </div>
          <div className="bottom-border"></div>
          <br />
        </div>
      </div>

      {/* This is where the carousel's at! */}
      <Featured />

      {/* The TWO CARDS */}
      {/* Only uncomment them for debugging purposes */}
      
      <div className="container d-none">
        <div className="hero d-flex justify-content-center">
          <div className="row d-flex justify-content-around">
            <div className="col-lg-6 col-sm-12 col-md-12 mb-5">
              <Link className="linkCards" to="/visual-art">
                <div className="heroCard black m-auto card-animation">
                  <div className="heroCardItem">
                    <div className="img-container">
                      <img src={VisualArtImage} alt="" />
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
                  <img src={CreativeCodingImage} alt="" />
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
      </div>
      

      </div>

      <div className="hero-line"></div>
      </div>

    </div>
  );
}
