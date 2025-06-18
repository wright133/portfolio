import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import MuseumDeArt from "../assets/museum_de_art_smaller.jpeg";
import SimpleJoysOfLife from "../assets/SimpleJoysOfLife.jpeg";
import HeritageJournal from "../assets/heritage-journal.png"; 
import EntropesImage from "../assets/visual-art/link/entropes_smaller.png"; 
import GeodesImage from "../assets/visual-art/link/geodes_smaller.png"; 
import HeritageImage from "../assets/visual-art/link/heritage_smaller.png"; 
import Footer from "./Footer";
import { Tweet } from "react-tweet";
import { useEffect } from "react";
import artworks from "./data/artworks";

export default function VisualArt() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only on mount.

  return (
    <div className="visual-art">
      <Navbar />

      {/* <p>Explore all visual art here by Ian Wright</p> */}

      <div className="container">
        <div className="container mb-5">
          <div className="row">
            <div className="col-md-6 mb-4 d-flex justify-content-center align-items-center">
              <div className="text-container text-center">
                <h1>Ian Wright</h1>
                <p>Creative coder based in Nairobi, Kenya.</p>
                <br />
                <p>
                  This page features all published works of art created and
                  co-created by Ian Wright.{" "}
                </p>
              </div>
            </div>
            <div className="col-md-6 mb-4">
              <div className="cover-img-container">
                <span>
                  <a
                    target="_blank"
                    href="https://i.seadn.io/gae/ahoGV3o4vd2lGrKVNfMj0EjD-qX_hGIqe8BuCve-0HI4Om735xGBqK5iMWE6TafzVktt1xIE3eddGLk8pwx8PLEJWU_sbf32Lr7HAg?auto=format&dpr=1&w=1000"
                  >
                    View Full Image
                  </a>
                </span>
                <img
                  src="https://i.seadn.io/gae/ahoGV3o4vd2lGrKVNfMj0EjD-qX_hGIqe8BuCve-0HI4Om735xGBqK5iMWE6TafzVktt1xIE3eddGLk8pwx8PLEJWU_sbf32Lr7HAg?auto=format&dpr=1&w=1000"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* header elements */}
        <div className="container d-flex justify-content-between">
          <h1>Artworks</h1>
          {/* <select name="artworks" id="artworks">
            <option value="Featured">Sort</option>
            <option value="Newest">Recent</option>
            <option value="Oldest">Oldest</option>
          </select> */}
        </div>

        {/* Artwork elements */}
        {/* <div className="row d-flex justify-content-center">
          <div className="col-md-4">
            <Link to="/artwork">
              <div className="art-card">
                <div className="img-container">
                  <img
                    src={EntropesImage}
                    alt=""
                  />
                </div>
                <div className="desc">
                  <p>Entropes</p>
                </div>
              </div>
            </Link>
          </div>

          <div className="col-md-4">
            <div className="art-card">
              <div className="img-container">
                <img
                  src={GeodesImage}
                  alt=""
                />
              </div>
              <div className="desc">
                <p>Geodes</p>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="art-card">
              <div className="img-container">
                <img
                  src={HeritageImage}
                  alt=""
                />
              </div>
              <div className="desc">
                <p>Heritage</p>
              </div>
            </div>
          </div>
        </div> */}
        <div className="row">
          {artworks.map((art) => (
            <div key={art.slug} className="col-md-4">
              <Link  style={{ textDecoration: 'none' }} to={`/artwork/${art.slug}`}>
                <div className="art-card">
                  <div className="img-container">
                    <img src={art.thumbnail} alt={art.title} />
                  </div>
                  <div className="desc">
                    <p>{art.title}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* show more button */}
        {/* <div className="container mt-2 mb-5 bottom-border d-flex justify-content-center">
          <button className="showMoreBtn mb-4">Show more</button>
        </div> */}

        {/* Exhibition elements */}

        <div className="container mt-2">
          <h1 className="mb-5">Exhibitions</h1>

          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-12 mb-5">
              <Link className="exhibitionCardLink" to="/exhibitions">
                <div className="exhibitionCard black m-auto">
                  <div className="exhibitionCardItem">
                    <div className="img-container">
                      <img src={MuseumDeArt} alt="" />
                    </div>
                    <p className="title" title="Title / Gallery / Museum">
                      Museu de Arte de Brasilia, Rhizome, Art Basel and more
                    </p>
                    <p className="occasion" title="Event">
                      {/* Africa Day 2024 */}
                    </p>
                    <p className="country" title="Location">
                      {/* Brazil */}
                    </p>
                    <p className="desc">
                      Showcasing my works at a special exhibitions all around the world. Read more about these global exhibitions. 
                    </p>
                  </div>
                </div>
              </Link>
            </div>

            {/* <div className="col-lg-4 col-sm-12 col-md-12 mb-5">
              <Link className="exhibitionCardLink" to="/visual-art">
                <div className="exhibitionCard black m-auto">
                  <div className="exhibitionCardItem">
                    <div className="img-container">
                      <img src={SimpleJoysOfLife} alt="" />
                    </div>
                    <p className="title" title="Title / Gallery / Museum">
                      'Simple Joys of Life'
                    </p>
                    <p className="occasion" title="Event">
                      VCA Invites
                    </p>
                    <p className="country" title="Location">
                      London
                    </p>
                    <p className="desc">
                      'Simple Joys of Life' was on display in London as part of
                      the Vertical Crypto Art Invites exhibition thanks to{" "}
                      <b>@verticalcrypto</b>
                    </p>
                  </div>
                </div>
              </Link>
            </div>
             */}
          </div>
        </div>

        {/* Show more exhibitions */}

        <div className="container mt-2 mb-5 bottom-border d-flex justify-content-center">
          {/* <button className="showMoreBtn mb-4">Show more</button> */}
        </div>

        {/* Journal elements */}

        <div className="container mt-2">
          <h1 className="mb-5">Journals</h1>

          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-12 mb-5">
              {/* <Link className="journalCardLink" to="#"> */}
                <a className="journalCardHyperlink" href="https://blog.codecanvas.art/beyond-the-code-with-kamau-kamau-ian-wright/"  target="_blank" rel="noreferrer">
                  <div className="journalCard black m-auto">
                    <div className="journalCardItem">
                      <div className="img-container">
                        <img src={HeritageJournal} alt="" />
                      </div>
                      <p className="title" title="Title / Gallery / Museum">
                        Beyond The Code - Code Canvas Blog
                      </p>
                      <p className="occasion" title="Event"></p>
                      <p className="country" title="Location"></p>
                      <p className="desc">
                        Honorable mention by the Code Canvas Team following the
                        drop of "Heritage" on Code Canvas, home for curated
                        Generative Art Drops.
                      </p>
                    </div>
                  </div>
                </a>
              {/* </Link> */}
            </div>
          </div>
        </div>

        {/* Show more journals */}

        <div className="container mt-2 mb-5 bottom-border d-flex justify-content-center">
          {/* <button className="showMoreBtn mb-4">Show more</button> */}
        </div>

        {/* Twitter elements */}

        <div className="container mt-2">
          <h1 className="mb-5">From Twitter | X</h1>

          <div className="row">
            <div className="col-lg-4 col-sm-12 col-md-12 mb-5">
              <Tweet className="tweet" id="1484310042014883841" />
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 mb-5">
              <Tweet className="tweet" id="1475400032287346688" />
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 mb-5">
              <Tweet className="tweet" id="1783327681909526676" />
            </div>

            <div className="col-lg-4 col-sm-12 col-md-12 mb-5">
              <Tweet className="tweet" id="1805666174425829447" />
            </div>

            <div className="col-lg-4 col-sm-12 col-md-12 mb-5">
              <Tweet className="tweet" id="1780533488833216831" />
            </div>
            <div className="col-lg-4 col-sm-12 col-md-12 mb-5">
              <Tweet className="tweet" id="1535256437848432642" />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
