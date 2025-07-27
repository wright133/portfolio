import Navbar from "./Navbar"; 
import Footer from "./Footer";
import { useEffect } from "react";
import { Tweet } from "react-tweet";

import ArtBaselImage from "../assets/exhibitions/art-basel-miami-1.jpeg";
import BrazilImage from "../assets/exhibitions/brazil-au.jpeg";
import KoreaImage from "../assets/exhibitions/seoul-korea.mp4";
import RhizomeImage from "../assets/exhibitions/rhizome-ny-1.jpeg";
import TriptychCapture from "../assets/exhibitions/umoja-triptychs.jpeg"; 
import "./Exhibitions.css"; 

export default function Exhibitions() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="article">
      <Navbar />
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">

            <h3 className="mb-2"><b>Exhibitions</b></h3>
            <h5 className="mb-4">Generative Art Beyond Borders</h5>
            <p className="mb-2">
              Over the years, Ian Wright's art has found its way into galleries, festivals, and cultural showcases around the world, from <b>Miami</b> to <b>Seoul</b>, <b>Brasilia</b> to <b>New York</b>. Each exhibition marks a milestone not just in visibility, but in the <b>evolution</b> of his practice: a journey that turns code, culture, and spirit into visual form.
            </p>
            <hr></hr>
            <p className="mb-5">Here's a look at where the art has been showcased and the amazing communities that made it possible:</p>

            <div className="accordion" id="exhibitionsAccordion">

              {/* Art Basel */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
                    Art Basel Miami (2023)
                  </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#exhibitionsAccordion">
                  <div className="accordion-body">
                    <p>"Umoja" premiered at Tezos @ South Beach during Art Basel Miami, one of the world’s most prestigious art events, a pivotal moment in Wright’s artistic journey, as his work stood alongside global talents in a live minting experience that placed the piece directly into the hands of collectors in real time. The work exhibited here, Umoja, is a collaborative project by Kenyan creators Kamau Kamau and Ian Wright, close friends and business partners who have been consistently releasing work together since 2021.</p> 
                    <div className="img-container d-flex justify-content-center align-items-center">
                        <img src={ArtBaselImage} alt="Art Basel Miami 2023" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}  />
                    </div>
                    <br></br>
                       <p>
                            Special thanks to <b><a href="https://x.com/ancurated" target="_blank" rel="noreferrer">@ancurated</a></b>, <b><a href="https://x.com/RefractionDAO" target="_blank" rel="noreferrer">@RefractionDAO</a></b>, <b><a href="https://x.com/tezos" target="_blank" rel="noreferrer">@tezos</a></b>, and <b><a href="https://x.com/fx_hash_" target="_blank" rel="noreferrer">@fx_hash_</a></b>, their support and encouragement made this possible, truly embodying the spirit of 'Umoja'.
                        </p>
                         <p>
                            We also got to see something beautiful: triptychs and diptychs of Umoja pieces assembled side-by-side, revealing the tesselated design, like an interconnected map of humanity. This aesthetic intention, captured beautifully by <b><a href="https://x.com/nygi_xxv" target="_blank" rel="noreferrer">@nygi_xxv</a></b> (Nygilia), was fully realized in Miami.
                        </p>
                        <div className="img-container d-flex justify-content-center align-items-center">
                            <img src={TriptychCapture} alt="Triptych Installation" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}  />
                        </div>
                  </div>
                </div>
              </div>

              {/* African Union Day */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingTwo">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                    African Union Day (2024)
                  </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#exhibitionsAccordion">
                  <div className="accordion-body">
                    <p>
                        'Umoja' was displayed during African Union Day celebrations in Brasilia, Brazil, in early 2024. The project resonated strongly with the event’s message of cultural solidarity, identity, and community.
                    </p>
                     <p>Special thanks to <b><a href="https://x.com/StudioYorktown" target="_blank" rel="noreferrer">@StudioYorktown</a></b> (Bruce) for making this happen.</p>
                     <div className="img-container d-flex justify-content-center align-items-center">
                        <img src={BrazilImage} alt="African Union Day Brazil" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Korea */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingThree">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    ZERO ONE x Lila - Seoul, South Korea (2024)
                  </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#exhibitionsAccordion">
                  <div className="accordion-body">
                    <p>
                        'Umoja' appeared in a hybrid art and music event, a unique collaboration between <b><a href="https://x.com/zero________one" target="_blank" rel="noreferrer">@zero________one</a></b> and <b>Lila</b>. This immersive exhibition explored culture through sound and visuals, and Umoja’s presence served as a digital thread stitching global experiences together.
                    </p>
                    <p>With deep gratitude to <b><a href="https://x.com/juujuumama" target="_blank" rel="noreferrer">@juujuumama</a></b> (Sierra Renee Ayo Sade) and the entire team at ZERO ONE.</p>
                    <div className="img-container d-flex justify-content-center align-items-center">
                        {/* <img src={KoreaImage} alt="Seoul Korea Event" /> */}
                        <video src={KoreaImage} controls autoPlay muted loop width="100%" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }}  />
                    </div>
                  </div>
                </div>
              </div>

              {/* Rhizome */}
              <div className="accordion-item">
                <h2 className="accordion-header" id="headingFour">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                    Rhizome World - New York, US (2025)
                  </button>
                </h2>
                <div id="collapseFour" className="accordion-collapse collapse" aria-labelledby="headingFour" data-bs-parent="#exhibitionsAccordion">
                  <div className="accordion-body">
                     <p>
                        In 2025, 'Umoja' was invited to show at <b>Rhizome World</b>, an annual global event by <b><a href="https://x.com/rhizome" target="_blank" rel="noreferrer">@rhizome</a></b> and <b><a href="https://x.com/ProcessingOrg" target="_blank" rel="noreferrer">@ProcessingOrg</a></b>. This was a full-circle moment as this work was showcased alongside creators from all over the world who had also bridged the gap between software and story-telling. 
                    </p> 
                    <div className="img-container d-flex justify-content-center align-items-center">
                        <img src={RhizomeImage} alt="Rhizome World NYC" style={{ maxWidth: '100%', maxHeight: '400px', objectFit: 'contain' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Outro */}
              {/* <div className="accordion-item">
                <h2 className="accordion-header" id="headingFive">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                    Where Next?
                  </button>
                </h2>
                <div id="collapseFive" className="accordion-collapse collapse" aria-labelledby="headingFive" data-bs-parent="#exhibitionsAccordion">
                  <div className="accordion-body">
                    <p>
                        This journey is far from over. Works like 'Umoja' continue to be exhibited worldwide, and this page will be updated manually as new milestones are achieved.
                    </p>
                    <p><i>Asante Sana</i> (Thank you) to all supporters across the globe 🌍</p>
                  </div>
                </div>
              </div> */}

            </div>

          </div>
        </div>
        <div className="row justify-content-center">
    
          <div className="col-lg-8">
            <hr className="my-5"></hr>
            <h3>Experience <b>Umoja</b></h3>
            <p>
               Each piece in Umoja is fully generative and permanently recorded on-chain. The 254-edition collection pays homage to Kenya’s country code, a symbol of identity, origin, and unity. This project has traveled the world, from Art Basel Miami to digital galleries across continents, yet its heart remains deeply rooted in culture. <br></br>A limited number of editions remain available for primary mint on FxHash.
            </p>
            <p><a href="https://www.fxhash.xyz/generative/slug/umoja" target="_blank" rel="noreferrer">
                <button className="btn custom-cta more-priority-btn">
                  <b>Add To Your Collection</b>
                </button>
            </a></p>

            <br />
            
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
