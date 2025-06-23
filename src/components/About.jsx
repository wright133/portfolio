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


export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const pencilSketches = [PencilImage1, PencilImage2, PencilImage3, PencilImage4, PencilImage5, PencilImage6]; 

  return (
    <div className="article">
      <Navbar />
      <div className="container">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <div className="col col-lg-8 article-content">
            <h2><b>About</b></h2>
            <h5>Generative Artist • Creative Technologist • Developer</h5>
            <span>~ 3 min read</span>
            <br /><br />

            <div className="img-container">
              <img src={ProfileImage} alt="Wright Ian" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
            </div>

            <br />
            <p>
              My name is <b>Wright Ian</b>, and I’m a creative coder and generative artist based in Kenya. My journey began with graphite and sketchbooks during my high school years — where I would spend hours lost in pencil drawings, learning to shape reality through observation, line, and patience. 
            </p>
          {/* This is the section where I need to showcase past traditional pencil works */}
          
          <h5 className="mt-5 mb-3">A Glimpse of My Pen / Pencil Work 🖋️</h5>
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
              That instinct to create never left; it simply evolved. Today, I use algorithms instead of pencils. I explore the world through generative systems — sometimes structured, sometimes chaotic, but always intentional. My work is the convergence of logic and intuition, symmetry and emergence, tradition and code. I often find myself caught between the spiritual and the computational: many of my pieces channel cosmic forms — figurines, gods, beings — that feel both ancient and futuristic.
            </p>

            <h3>What My Work Explores</h3>
            <p>
              My work explores <b>creation as preservation</b>. In a world trying to create digital impermanence, I use on-chain generative art as a living archive, a tool for safeguarding culture, ancestry, and spiritual memory. At its core, my art is about bridging what we know with what we can only sense — a visual dialogue between human identity and universal connection.
            </p>

            <h3>Process</h3>
            <p>
              I begin with curiosity. I might sketch an idea, write a seed of logic, or dive into code and allow forms to evolve through iteration. I let intuition guide me on when to break the rules. As a visual artist, my tools include libraries like p5.js, and VS Code editor. As a developer, I use a multitude of tools described in the <a href="/creative-coding" target="_blank" rel="noreferrer">Creative Coding</a> section. Whatever I am working on, I treat it as play. 
            </p>

            <h3>What I Aim to Achieve</h3>
            <p>
              My aim is to build worlds that speak to people across boundaries — cultural, technical, spiritual. Through generative art, I want to immortalize African creativity, not just as heritage, but as future. I hope my work helps others <i>feel</i> something real in digital spaces. Something honest. Something sacred.
            </p>

            <br />
            
            <br />
            <h3>Let’s Stay Connected</h3>
            <p>
              You can find my work on platforms like <a href="https://www.fxhash.xyz/u/ianwright" target="_blank" rel="noreferrer"><b>fx(hash)</b></a>, and updates via my <a href="https://x.com/ianwright" target="_blank" rel="noreferrer"><b>Twitter</b></a>.
            </p>

            <br /><br />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
