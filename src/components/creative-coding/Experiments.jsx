import Navbar from "../Navbar";
import Footer from "../Footer";
import { useEffect } from "react";
import "./Experiments.css";
import { Link } from "react-router-dom";

// Dummy data (replace/add more later)
import img1 from "../../assets/experiments/experiment1.png";
import img2 from "../../assets/experiments/experiment2.png";
import img3 from "../../assets/experiments/experiment3.png";

export const experiments = [
  {
    image: img1,
    title: "Data-Driven Portraits",
    description: "Combining pixel data and premade gen-art code to create generative portraits.",
    link: "#",
    buttonText: "Try It",
  },
  {
    image: img2,
    title: "Turn your Gen-art into a Filter",
    description: "Using your algorithm to visualize pictures or legendary works like the Monalisa.",
    link: "#",
  },
  {
    image: img3,
    title: "Earth from Three JS",
    description: "Simulating the universe with procedurally generated stars (and Earth too).",
    link: "#",
  },
];


export default function Experiments() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="experiments-page">
      <Navbar />

      <div className="container mt-5">
          <div className="alert alert-warning text-center" role="alert">
              🚧 This page is still under construction. Some links or sections may not be fully functional yet.<br />
              Expected full update by <strong>July 2nd, 2025</strong>.
          </div>
      </div>

      <div className="container py-5">
        <h2 className="text-center mb-4">Experiments</h2>
        <p className="text-center mb-5">
          A collection of fun, weird, and sometimes brilliant experiments using tools like <b>ml5.js</b>, <b>p5.js</b>, and <b>Three.js</b>. These are not full-scale projects — just ideas pushed into existence, sometimes overnight.
        </p>

      <div className="row g-4">
        {experiments.map((exp, index) => (
          <div className="col-md-4" key={index}>
            <div className="card h-100 shadow-sm experiment-card">
              <img
                src={exp.image}
                alt={exp.title}
                className="card-img-top experiment-image"
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{exp.title}</h5>
                <p className="card-text">{exp.description}</p>
                <a
                  href={exp.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-dark mt-auto"
                >
                  {exp.buttonText || "View Project"}
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>


        <div className="text-center mt-5">
          <p>
            I’m always adding more experiments — from machine learning sketches to browser-based data art.
            Got an idea or just curious about something?{" "}
            <a href="https://x.com/__IanWright__" target="_blank" rel="noopener noreferrer">
              <b>DM me on X</b>
            </a>{" "}
            or send an email to <a href="mailto:thewian27@gmail.com">thewian27@gmail.com</a>.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
