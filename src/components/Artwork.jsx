import { useParams } from "react-router-dom";
import artworks from "./data/artworks";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ReadMore from "./ReadMore";
import { useEffect } from "react";

export default function Artwork() {
  const { slug } = useParams();
  const art = artworks.find((a) => a.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!art) return <div>Artwork not found.</div>;

  return (
    <div className="artwork">
      <Navbar />
      <div className="container">
        <div className="row">
          {/* Description */}
          <div className="col-lg-4 artwork-description">
            <h4>{art.title}</h4>
            <br />
            <h5>Description</h5>
            <div className="desc">
              <ReadMore limit={400}>
                {art.description}
              </ReadMore>
              <p><a href={art.link} target="_blank" rel="noopener noreferrer">View on Marketplace</a></p>
            </div>
          </div>

          {/* Curated Outputs */}
          <div className="col-lg-8 curated-pieces">
            <h5>Curated</h5>
            <div className="row">
              {art.curatedOutputs.map((piece, index) => (
                <div key={index} className="col-md-4">
                  <div className="art-card">
                    <a href={piece.link} target="_blank" rel="noopener noreferrer">
                      <div className="img-container">
                        <img src={piece.url} alt={piece.title} />
                      </div>
                    </a>
                    <div className="desc">
                      <p>{piece.title}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
