import Navbar from "./Navbar"; 
import Footer from "./Footer"; 
import VisualArtImage from "../assets/visualart.png";
import CreativeCodingImage from "../assets/creativecoding.png";
import BeadedPersonImage from "../assets/beaded-person.png";
import { Link } from "react-router-dom";


export default function CreativeCoding () {
    return (
        <div>

            <Navbar></Navbar>
            
            <div className="container mt-5">
                <div className="alert alert-warning text-center" role="alert">
                    🚧 This page is still under construction. Some links or sections may not be fully functional yet.<br />
                    Expected full update by <strong>June 23th, 2025</strong>.
                </div>
            </div>

            <div className="container d-flex justify-content-center">
                <div className="welcome-text">
                <h2>Creative Coding</h2> 
                <br />
                <p>I’m Wright — a creative technologist, generative artist, and web developer. <br />My work lives at the intersection of art, code, and future systems. Here, I share my process, my tools, and my evolving experiments.<br /> This space splits into two core worlds.</p> 
                
                </div>
            </div>
            <div className="hero d-flex justify-content-center">
                <div className="row d-flex justify-content-around">
                <div className="col-lg-6 col-sm-12 col-md-12 mb-5">
                    <Link className="linkCards" to="#">
                    <div className="heroCard black m-auto card-animation">
                        <div className="heroCardItem">
                        <div className="img-container">
                            <img src="https://pbs.twimg.com/media/GqcTKojWQAAWego?format=jpg&name=4096x4096" alt="" />
                        </div>
                        <h1 className="title">Generative Art & Coding Experiments</h1>
                        <div className="line"></div>
                        <p className="desc">I use algorithms, randomness, and geometry to create generative visual works</p>
                        </div>
                    </div>
                    </Link>
                </div>

                <div className="col-lg-6 col-sm-12 col-md-12 mb-5">
                    <Link className="linkCards" to="#">
                    <div className="heroCard black m-auto card-animation">
                        <div className="heroCardItem">
                        <div className="img-container">
                            <img src="https://www.corporatevision-news.com/wp-content/uploads/2022/04/Software-Development.jpg" alt="" />
                        </div>
                        <h1 className="title">Software Development & Web3 Projects</h1>
                        <div className="line"></div>
                        <p className="desc">I build applications, interfaces, and tools using technologies like JavaScript, Solidity, React, and more.
                        </p>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </div>

{/* Supporting Sections */}
<div className="container mt-5">
  {/* What You’ll Find */}
  <div className="section mb-5">
    <h4> What You’ll Find Here</h4>
    <br></br>
    <ul>
      <li>💡 Unreleased and WIP generative art projects</li>
      <li>🧠 Prototypes and experimental scripts</li>
      <li>📦 Web3 builds, interfaces, and developer challenges</li>
      <li>🛠 My go-to tools for both art and software work</li>
    </ul>
  </div>

  {/* Why Creative Coding Matters */}
  <div className="section mb-5">
    <h4>Why Creative Coding Matters to Me</h4>
    <br></br>
    <div className="row">
      <div className="col-md-4 d-flex justify-content-center">
        <div className="img-container">
            <img src={BeadedPersonImage} alt="" width={200} />
        </div>
      </div>
      <div className="col-md-6 m-3">
         <p>
            Creative coding is where my artistic voice and technical mind converge.  
            It’s how I think, design, test, and build — whether it’s a generative NFT drop, an automation tool, or a <i>decentralized energy tracker</i>.
            <br /><br />
            To me, it’s not just about writing code. It’s about bringing ideas to existence. 
        </p>
      </div>
    </div>
   
  </div>

  {/* My Tools */}
  <div className="section mb-5">
    <h4>My Tools</h4>
    <br></br>
    <div className="row">
      <div className="col-md-6">
        <strong>Creative Coding</strong>
        <ul>
          <li>Vanilla JS</li>
          <li>p5.js</li>
          <li>ML5.js</li>
          <li>Three.js</li>
          <li>GLSL / shaders</li>
          <li>Processing</li>
        </ul>
      </div>
      <div className="col-md-6">
        <strong>Web Development & Dev Tools</strong>
        <ul>
          <li>React, TailwindCSS</li>
          <li>Node.js, Express</li>
          <li>Solidity + Foundry</li>
          <li>Firebase, Supabase</li>
          <li>GitHub, Vercel, WSL</li>
        </ul>
      </div>
    </div>
  </div>
</div>

        <Footer></Footer>
        
        </div>
    );
}