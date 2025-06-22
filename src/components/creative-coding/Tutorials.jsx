import Navbar from "../Navbar";
import Footer from "../Footer";
import { useEffect } from "react";
import "./Tutorials.css"; // Create this for styling

export default function Tutorials() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="tutorials-page">
      <Navbar />
      <div className="container py-5">
        <h2 className="text-center mb-4">Tips & Tutorials</h2>
        <p className="text-center mb-5">
          Lessons from reducing render times, optimizing sketch performance, and writing time/space efficient code with examples from my past projects.
        </p>

        {/* Section 1: Reducing Render Times */}
        <div className="mb-5">
          <h4>1. Reducing Render Times & Optimizing Sketches</h4>
          <p>
            Over the years working with p5.js and the HTML5 canvas API (with vanilla JavaScript), I’ve learned how to avoid unnecessary lag, reduce CPU strain, and keep renders clean:
          </p>
          <ul>
            <li>✅ Use <b><code>noLoop()</code></b> where animation isn’t needed</li>
            <li>✅ Cache computationally costly calculations instead of running them every frame <br></br> (or find a way to run them once)</li>
            <li>✅ Pre-render complex visuals to a buffer (p5.Graphics) if reused</li>
            <li>✅ When possible, simplify geometry and avoid deep recursion</li>
            {/* <li>✅ Disable anti-aliasing or effects that slow things down</li> */}
          </ul>

          <div className="card bg-light p-3 mb-3">
            <p><b>Example: Only redraw on interaction</b></p>
            <pre><code>
{`function setup() {
  createCanvas(600, 600);
  noLoop(); // only draw once
}

function draw() {
  background(240);
  // expensive drawing
}

function mousePressed() {
  redraw(); // trigger re-render
}`}
            </code></pre>
          </div>
        </div>

        {/* Section 2: Efficient Code (DSA Style) */}
        <div className="mb-5">
          <h4>2. Writing Efficient Code</h4>
          <p>
            Performance isn’t just about render time — it’s about code logic too.
            These principles help make code fast, readable, and scalable:
          </p>

          <ul>
            <li>✅ Use arrays/objects/maps smartly — access time matters (O(1) vs O(n) complexity)</li>
            <li>✅ Avoid nested loops where possible</li>
            <li>✅ Always check: Can this be done in linear time?</li>
            <li>✅ Know your complexity — a pretty sketch can fail if its loop runs in O(n³) or O(n²)</li>
            <li>✅ Use data structures like Sets or Maps for fast lookup</li>
          </ul>

          <div className="card bg-light p-3 mb-3">
            <p><b>Example: Using a Set for fast lookup</b></p>
            <pre><code>
{`const visited = new Set();

function markVisited(cell) {
  visited.add(cell);
}

function isVisited(cell) {
  return visited.has(cell); // O(1) time
}`}
            </code></pre>
          </div>
        </div>

        <div className="text-center">
          <p className="mt-4">This is only the beginning of this part. We haven't gotten into the deep stuff, we're still yet to see how these concepts applied in some of my past released projects. You'll see mistakes that are still there even in some of my live / on-chain gen art projects and improvements that have been made ever since. </p>
          <p className="mt-4"> <b>More tutorials coming soon.</b> For now — optimize, simplify, and always profile your code! ⚡</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
