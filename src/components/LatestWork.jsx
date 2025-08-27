import Navbar from "./Navbar";
import Footer from "./Footer"; 

import DiscretionImage from "../assets/latest-work/discretion-logo.png";
import InnerReflectionImage from "../assets/latest-work/ir6.png";
import ContinuumImage from "../assets/latest-work/continuum.png"; 
import HeritageImage from "../assets/latest-work/heritage-001.png";

import "./latest-work.css";

import { useEffect } from "react";

export default function LatestWork() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="">
      <Navbar />
      <div className="container d-flex align-items-center justify-content-center">
        <h3 className="mx-2"><b>LATEST WORK</b></h3>
        <p className="mt-2 page-description">
            These works are fresh from the studio, released as 1/1 pieces, limited editions, or long-form generative art. Explore and claim yours while they're still available.
        </p>
      </div>
      <div className="container text-center">
        <div className="row mt-5">
          {/* Insert latest work cards here */}
          <div className="col-md-4">
            <a href="https://objkt.com/tokens/KT1Q9xy4TyScX2SDz7cnNdjoHXsUtuBKtvZK/10" target="_blank">
                <div className="work-card">
                    <div className="img-container">
                        <img src={ContinuumImage} className="img-fluid" alt="Latest work 1" /> 
                    </div>
                    <div className="info">
                        <h5 className="mt-2">Continuum (auction)</h5>
                        <p className="text-muted">A line may be a path made by a point moving in space but it also bridges two points, which creates connection, convergence and cycles...
</p>
                    </div>
                </div>
            </a>
          </div>
          
          <div className="col-md-4">
            <a href="https://objkt.com/collections/KT1JCKTiExFy14MF75ALyy8pCV2ZD6UVgwAo" target="_blank">
                <div className="work-card">
                    <div className="img-container">
                        <img src={DiscretionImage} className="img-fluid" alt="Latest work 2" /> 
                    </div>
                    <div className="info">
                        <h5 className="mt-2">Discretion</h5>
                        <p className="text-muted">An imperfect, non-human painter distorts geometry with paint and smears. 26 editions.</p>
                    </div>
                </div>
            </a>
          </div>

          <div className="col-md-4 text-center">
            
            <a href="https://gamma.io/ordinals/collections/inner-reflection" target="_blank">
                <div className="work-card">
                    <div className="img-container">
                        <img src={InnerReflectionImage} className="img-fluid" alt="Latest work 3" />
                    </div>
                    <div className="info">
                        <h5 className="mt-2">Inner Reflection</h5>
                        <p className="text-muted">A long-form bead-inspired and collaborative project by Kenyan creators; Kamau Kamau and Ian Wright.</p>
                    </div>
                </div>
            </a>
          </div>
          {/* Add more as needed */}
        </div>
      </div>

      <div className="container my-5 text-center">
        <div className="instruction-note"><i>Access the release instantly, for now, just one click takes you to the platform where you can secure a piece. <br></br>Thank you for your continued support.</i></div>
      </div>
      <Footer />
    </div>
  );
}
