import Navbar from "../Navbar";
import Footer from "../Footer";
import { useEffect } from "react";
import "./DevHome.css";

export default function DevHome() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="dev-home">
      <Navbar />

      <div className="container mt-5">
        <div className="alert alert-warning text-center" role="alert">
          🚧 This section is still under construction. Expected updates by <strong>July 11th, 2025</strong>.
        </div>
      </div>

      <div className="container py-5">
        <h2 className="text-center mb-4">Dev Stuff</h2>
        <p className="text-center mb-5">
          I build and experiment with software tools — from frontend interfaces using <b>React</b>, to smart contracts with <b>Solidity</b>. This section captures my developer side — the logic, systems, bots, and code that power projects behind the scenes.
        </p>

        <div className="text-center">
          <p>
            Soon you’ll find detailed articles, app showcases, scripts, and systems I’ve built over the years — everything from NFT tools, automation scripts to full-stack applications.
          </p>
          <p className="mt-4">
            Stay tuned! 🚀
          </p>
        </div>
      </div>
      <hr></hr>
      <Footer />
    </div>
  );
}
