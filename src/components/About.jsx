import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import ProfileImage from "../assets/about/wright-profile.png"; // use your official image here 
import PencilImage1 from "../assets/pencil-work/1.jpg"; 
import PencilImage2 from "../assets/pencil-work/2.jpg"; 
import PencilImage3 from "../assets/pencil-work/3.jpg"; 
import PencilImage4 from "../assets/pencil-work/4.jpg"; 
import PencilImage5 from "../assets/pencil-work/5.jpg"; 
import PencilImage6 from "../assets/pencil-work/6.jpg"; 
import "./about.css"; 


export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pencilSketches = [PencilImage1, PencilImage2, PencilImage3, PencilImage4, PencilImage5, PencilImage6]; 

  return (
    <div className="article">
      <Navbar />
      <div className="container about-page">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <div className="col col-lg-8 article-content">
            <h2><b>About</b></h2>
            <h5>Generative Artist • Creative Technologist • Developer</h5>
            <br /><br />

            <div className="row d-flex justify-content-center align-items-center">
              <div className="col-lg-6 col-md-12 about-pic">       
                <div className="img-container">
                  <img src={ProfileImage} alt="Wright Ian" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
                </div>
              </div>
              <div className="col-lg-6 col-md-12 py-3">
                <p className="big-text">
                  "My name is <b>Ian Wright</b>, and I’m a creative coder and generative artist from Kenya. My artistic journey began with graphite and sketchbooks during my high school years, where I would spend hours lost in pen or pencil drawings."
                </p>
            </div>
            </div>

            {/* <div className="img-container">
              <img src={ProfileImage} alt="Wright Ian" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
            </div>

            <br />
            <p>
              "My name is <b>Ian Wright</b>, and I’m a creative coder and generative artist from Kenya. My journey began with graphite and sketchbooks during my high school years, where I would spend hours lost in pen or pencil drawings."
            </p> */}
          {/* This is the section where I need to showcase past traditional pencil works */}
          
          <h5 className="mt-5 mb-3">Old Sketches</h5>
          <div className="row g-3">
            {pencilSketches.map((img, i) => (
              <div className="col-4 col-md-3" key={i}>
                <img
                  src={img}
                  alt={`Sketch ${i + 1}`}
                  className="img-fluid rounded cursor-pointer"
                  data-bs-toggle="modal"
                  data-bs-target={`#pencilModal${i}`}
                  style={{ objectFit: "cover", height: "100px", width: "100%", cursor: "pointer" }}
                />

                {/* Modal for each image */}
                <div
                  className="modal fade"
                  id={`pencilModal${i}`}
                  tabIndex="-1"
                  aria-labelledby={`pencilModalLabel${i}`}
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-lg">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h5 className="modal-title" id={`pencilModalLabel${i}`}>Sketch {i + 1}/6</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div className="modal-body d-flex justify-content-center">
                        <img src={img} alt={`Sketch ${i + 1}`} className="img-fluid" style={{ maxHeight: "80vh", objectFit: "contain" }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          <p className="text-center">2016 - 2018</p>
          </div>
            <br></br>
            <p>
              "That instinct to create never left; it simply evolved. Today, I have embraced algorithms (I still sketch). I explore generative systems. My work is the convergence of logic and intuition, tradition and code. I often find myself caught between the spiritual and the computational: many of my pieces are inspired by cosmic/spiritual narratives. "
            </p>
            <br></br>

            <h5>What Does Your Work Explore?</h5>
            <p>
              "My work explores <b>creation as preservation</b>. I see on-chain generative art as an application of a living archive, a tool for safeguarding culture, ancestry, and spiritual memory. I believe the underlaying technology could one day be used to create `The Museum of Life`. At its core, my art is about bridging what we know with what we can only sense — a visual dialogue between human identity and universal connection."
            </p>
            <br></br>

            <h5>What's Your Process?</h5>
            <p>
              "I begin with curiosity. I might sketch an idea, write some logical statements, or dive into code and allow forms to evolve through iteration. I let intuition guide me on when to break the rules. As a visual artist, my tools include libraries like p5.js, and VS Code editor. I treat my work as play, since I am highly passionate about it."
            </p>
            <br></br>

            <h5>Why Do You Do This?</h5>
            <p>
              "My aim is to create a space where others can connect with themselves, not with me. I believe that art isn't about showing people my world, it is about giving them the key to unlock their own."
            </p>

            <br />
            
            <br />
            <h3>Stay Connected</h3>
            <p>
              You can find Ian Wright's work on platforms like <a href="https://www.fxhash.xyz/u/ianwright" target="_blank" rel="noreferrer"><b>fx(hash)</b></a> and updates on <a href="https://x.com/ianwright" target="_blank" rel="noreferrer"><b>Twitter</b></a>.
            </p>

            <br /><br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
