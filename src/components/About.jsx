import Navbar from "./Navbar";
import Footer from "./Footer";
import { useEffect } from "react";
import ProfileImage from "../assets/about/wright-profile.png"; // use your official image here

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
              <img src={ProfileImage} alt="Wright Ian" />
            </div>

            <br />
            <p>
              My name is <b>Wright Ian</b>, and I’m a creative coder and generative artist based in Kenya. My journey began with graphite and sketchbooks during my high school years — where I would spend hours lost in pencil drawings, learning to shape reality through observation, line, and patience. That instinct to create never left; it simply evolved.
            </p>

            <p>
              Today, I use algorithms instead of pencils. I explore the world through generative systems — sometimes structured, sometimes chaotic, but always intentional. My work is the convergence of logic and intuition, symmetry and emergence, tradition and code. I often find myself caught between the spiritual and the computational: many of my pieces channel cosmic forms — figurines, gods, beings — that feel both ancient and futuristic.
            </p>

            <h3>What My Work Explores</h3>
            <p>
              My work explores <b>creation as preservation</b>. In a world of digital impermanence, I use on-chain generative art as a living archive, a tool for safeguarding culture, ancestry, and spiritual memory. Some pieces are abstract visual prayers. Others are meditations on symmetry, flowfields, entropy, and divine design. At its core, my art is about bridging what we know with what we can only sense — a visual dialogue between human identity and universal connection.
            </p>

            <h3>Process</h3>
            <p>
              I begin with curiosity. I might sketch an idea, write a seed of logic, or dive into code and allow forms to evolve through iteration. I let intuition guide me on when to break the rules. My tools include generative libraries like p5.js and Three.js, and I also work with Solidity and Web3 when exploring permanence and decentralized systems. Whatever I am working on, I treat every art piece as an experiment. 
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
