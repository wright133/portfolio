import Navbar from "../Navbar";
import Footer from "../Footer";
import { useEffect } from "react";
import "./WIPGallery.css";

// wip data
import { unreleased, wip } from "./data/wips";


export default function WIPGallery() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const unreleasedArtworks = unreleased; // from wip data
  const wipGallery = wip; // from wip data 

  return (
    <div className="wip-gallery">
      <Navbar />

      <div className="container py-5">
        <h2 className="text-center mb-4">Unreleased Works</h2>
        <p className="text-center mb-5">
          These are unreleased generative art projects, sneak peaks or rare sketches that haven't made it to final release just yet.
        </p>

        <div className="row g-4">
          {unreleasedArtworks.map((art, index) => (
            <div className="col-md-4 col-sm-6" key={index}>
              <div className="card shadow-sm h-100">
                <img
                  src={art.src}
                  alt={art.title}
                  className="card-img-top img-fluid"
                  style={{ maxHeight: "300px", objectFit: "cover" }}
                />
                <div className="card-body text-center">
                  <h6 className="card-title">{art.title}</h6>
                  <p className="card-text text-muted">{art.note}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* WIP Gallery Carousel */}
      <hr className="my-5"></hr>
      <h2 className="text-center ">WIP Gallery</h2>
      <br></br>
      <p className="text-center">These will always be updated, stay tuned. 
      <br></br><br></br></p>
      <p style={{ fontSize: "12px", marginLeft: "5px"}}>
      <i>- Click an image to view</i><br></br>
      <i>- On desktop, use the controls to navigate.</i>
      <br></br>
      <i>- On mobile, tap towards the <b>LEFT</b> or <b>RIGHT</b> of your screen to navigate, you can <b>SWIPE</b> on the image too</i>
      </p>
      <div className="wip-carousel-gallery">
        
        {/* <div id="wipCarousel" className="carousel slide" data-bs-ride="carousel"> */}
        <div 
          id="wipCarousel" 
          className="carousel slide" 
          data-bs-ride="carousel" 
          data-bs-interval="5000"
          data-bs-pause="false"
        >
          <div className="carousel-inner">
            {wipGallery.map((item, index) => (
              <div
                className={`carousel-item ${index === 0 ? "active" : ""}`}
                key={index}
              >
                <div className="carousel-image-wrapper">
                  <a href={item.src} target="_blank" rel="noopener noreferrer">
                    <img src={item.src} className="d-block w-100 carousel-img-" alt={item.title} />
                  </a>
                  <div className="carousel-caption-custom">
                    <h5>{item.title}</h5>
                    <p>{item.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Optional: Add carousel controls */}
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#wipCarousel"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#wipCarousel"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
          </button>
        </div>
      </div>

        <hr className="my-5" />
      <Footer />
    </div>
  );
}
