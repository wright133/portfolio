import { Link } from "react-router-dom";
import Navbar from "../Navbar";
import Footer from "../Footer";
import './GenArtHome.css'; 
import { useEffect } from "react"; 
import VeraMolnarImage from "../../assets/gen-art-home/vem_1016_300dpi.webp"; 
import BenLaposkyImage from "../../assets/gen-art-home/Oscillon+40.png"; 

export default function GenArtHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only on mount.

  return (
    <div className="gen-art-home">
      <Navbar />

      <div className="container py-5">

        <h2 className="text-center mb-4">Generative Art & Experiments</h2>
        <p className="text-center mb-5">
          This is where algorithms meet aesthetics. Here I share ongoing generative art work, creative code experiments, and <b>lessons</b> from my process. Explore what I'm building behind the scenes.
        </p>

        <div className="row g-4">
          {/* WIPs & Unreleased */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center">
              <div className="card-body">
                <h5 className="card-title">WIPs & Unreleased Works</h5>
                <p className="card-text">
                  A look into unfinished generative projects, previews, and works in progress — some may never be released, but all reflect raw exploration.
                </p>
                <Link to="/creative-coding/gen-art/wips" className="btn btn-dark mt-3">
                  Explore Works
                </Link>
              </div>
            </div>
          </div>

          {/* Tutorials & Tips */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center">
              <div className="card-body">
                <h5 className="card-title">Tips & Tutorials</h5>
                <p className="card-text">
                  Lessons from reducing render times, optimizing sketch performance, and writing time/space efficient code with examples from my past projects.
                </p>
                <Link to="/creative-coding/gen-art/tutorials" className="btn btn-dark mt-3">
                  Read Tutorials
                </Link>
              </div>
            </div>
          </div>

          {/* Experiments */}
          <div className="col-md-4">
            <div className="card h-100 shadow-sm border-0 text-center">
              <div className="card-body">
                <h5 className="card-title">Creative Experiments</h5>
                <p className="card-text">
                  Fun, experimental projects using machine learning, video, data, or sound — built with tools like ml5.js, p5.js, and sometimes Three.js.
                </p>
                <Link to="/creative-coding/gen-art/experiments" className="btn btn-dark mt-3">
                  See Experiments
                </Link>
              </div>
            </div>
          </div>

        </div>

        <hr className="my-5" />

        <div className="row justify-content-center text-center">
            <div className="col-lg-10">
                <h4 className="mb-3">What is Generative Art?</h4>
                <p>
                Generative art is artwork created wholly or partly using code.
                The logic, rules, and randomness defined in a script determine the final outputs —
                which can be images, music, animations, or more.
                </p>
            </div>
        </div>


        <div className="row justify-content-center text-center">
            
            <div className="col-lg-4">
               <h5 className="mt-5 mb-3">A Brief History</h5>
                <p>
                First emerging in the 1960s with pioneers like <a href="https://ropac.net/artists/231-vera-molnar/" target="_blank" rel="noreferrer"><b>Vera Molnár</b></a> and <a href="https://en.wikipedia.org/wiki/Sol_LeWitt" target="_blank" rel="noreferrer"><b>Sol LeWitt</b></a>,
                generative art fused math and code into visual expression. These early works laid the
                groundwork for today’s creative coding movement.
                </p> 
            </div>
            
            <div className="col-lg-4">
                <h5 className="mt-5 mb-3">Techniques & Tools</h5>
                <p>
                From Perlin noise to Voronoi tessellations and cellular automata, generative art
                techniques are rooted in math and nature. Tools include <b>p5.js</b>, <b>Processing</b>,
                <b>Python</b>, <b>Vanilla JS</b>, and even <b>TouchDesigner</b>.
                </p>         
            </div>
            
            <div className="col-lg-4">
                <h5 className="mt-5 mb-3">Why It Matters</h5>
                <p>
                Beyond aesthetics, generative art could power fashion design, music generation, scientific
                visualization — and even onchain cultural preservation (my work exactly). I see it as <i><b>modern-day hieroglyphics</b></i>.
                </p>  
            </div>

        </div>
            

        <div className="row mt-5  justify-content-center text-center">
            <p>Gen Art from way back in the 60s...</p>
            <br></br>
            
            <div className="col-md-8 col-lg-6 mx-auto">
                <img src={VeraMolnarImage} alt="..." className="img-fluid rounded shadow"  style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
                <p className="mt-3">Vera Molnár, <b>Molndrian</b> (1974)</p>
            </div>
            <div className="col-md-8 col-lg-6 mx-auto">
                <img src={BenLaposkyImage} alt="..." className="img-fluid rounded shadow"  style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
                <p className="mt-3">Ben F. Laposky, <b>Oscillon 40</b> (1952) <br></br>(from a Cathode Ray Oscilloscope)</p>
            </div>
        </div>


        <h5 className="mt-5 mb-3">Let’s Connect</h5>
        <p>
        If you're curious, want to learn, or just vibing with this — feel free to
        <a href="https://x.com/__IanWright__" target="_blank" rel="noopener noreferrer"> <b>DM me on X</b></a> or email me at <a href="mailto:thewian27@gmail.com">thewian27@gmail.com</a>.
        <br />
        <br></br>
        Happy learning and Happy hacking! 🤓
        </p>


      </div>

      <Footer />
    </div>
  );
}
