import Navbar from "./Navbar"; 
import Footer from "./Footer";
import { useEffect } from "react";
import { Tweet } from "react-tweet";

import ArtBaselImage from "../assets/exhibitions/art-basel-miami-1.jpeg";
import BrazilImage from "../assets/exhibitions/brazil-au.jpeg";
import KoreaImage from "../assets/exhibitions/seoul-korea.mp4";
import RhizomeImage from "../assets/exhibitions/rhizome-ny-1.jpeg";
import TriptychCapture from "../assets/exhibitions/umoja-triptychs.jpeg";

export default function Exhibitions() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="article">
            <Navbar />
            <div className="container">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                    <div className="col col-lg-8 article-content">
                        <h1>Exhibitions</h1>
                        <h4>Generative Art Beyond Borders 🌍</h4>
                        <span>~ 4 min read</span>
                        <br /><br />

                        <p>
                            <b>Umoja</b> (Swahili for <i>unity</i>) has traveled far and wide since its debut, becoming our most exhibited generative art project to date. Built with love by <b>Kamau Kamau</b> and <b>Ian Wright</b> (me), Umoja is not just art — it's a cultural dialogue in code, abstraction, and human connection. Here's a look at where Umoja has been showcased and the amazing communities that made it possible:
                        </p>

                        <br />
                        <h3>Art Basel Miami (2023)</h3>
                        <p>
                            Umoja premiered at <b>Tezos @ South Beach / Art Basel Miami</b>, one of the world’s most prominent art events. This moment marked a turning point in our careers — not only did our generative art stand shoulder-to-shoulder with global talents, but we were also part of a live minting experience that brought Umoja into collectors’ hands in real-time.
                        </p>
                        <div className="img-container">
                            <img src={ArtBaselImage} alt="Art Basel Miami 2023" />
                        </div>
                        <br></br>
                        <p>
                            Special thanks to <b><a href="https://x.com/ancurated" target="_blank" rel="noreferrer">@ancurated</a></b>, <b><a href="https://x.com/RefractionDAO" target="_blank" rel="noreferrer">@RefractionDAO</a></b>, <b><a href="https://x.com/tezos" target="_blank" rel="noreferrer">@tezos</a></b>, and <b><a href="https://x.com/fx_hash_" target="_blank" rel="noreferrer">@fx_hash_</a></b> — your support and encouragement made this possible. You truly embodied the spirit of Umoja.
                        </p>
                        <p>
                            We also got to see something beautiful: triptychs and diptychs of Umoja pieces assembled side-by-side, revealing the tesselated design — like an interconnected map of humanity. This aesthetic intention, captured beautifully by <b><a href="https://x.com/nygi_xxv" target="_blank" rel="noreferrer">@nygi_xxv</a></b> (Nygilia), was fully realized in Miami.
                        </p>
                        <div className="img-container">
                            <img src={TriptychCapture} alt="Triptych Installation" />
                        </div>

                        <br />
                        <h3>African Union Day (2024)</h3>
                        <p>
                            Umoja was displayed during African Union Day celebrations in Brasilia, Brazil, in early 2024. The project resonated strongly with the event’s message of cultural solidarity, identity, and community.
                        </p>
                        <p>Special thanks to <b><a href="https://x.com/StudioYorktown" target="_blank" rel="noreferrer">@StudioYorktown</a></b> (Bruce) for making this happen 🙏🏾</p>
                        <div className="img-container">
                            <img src={BrazilImage} alt="African Union Day Brazil" />
                        </div>

                        <br />
                        <h3>ZERO ONE x Lila - Seoul, South Korea (2024)</h3>
                        <p>
                            Umoja appeared in a hybrid art and music event — a unique collaboration between <b><a href="https://x.com/zero________one" target="_blank" rel="noreferrer">@zero________one</a></b> and <b>Lila</b>. This immersive exhibition explored culture through sound and visuals, and Umoja’s presence served as a digital thread stitching global experiences together.
                        </p>
                        <p>With deep gratitude to <b><a href="https://x.com/juujuumama" target="_blank" rel="noreferrer">@juujuumama</a></b> (Sierra Renee Ayo Sade) and the entire team at ZERO ONE 🙏🏾</p>
                        <div className="img-container">
                            {/* <img src={KoreaImage} alt="Seoul Korea Event" /> */}
                            <video src={KoreaImage} controls autoPlay muted loop width="100%" />
                        </div>

                        <br />
                        <h3>Rhizome World - New York, US (2025)</h3>
                        <p>
                            In 2025, Umoja was invited to show at <b>Rhizome World</b> — an annual global event by <b><a href="https://x.com/rhizome" target="_blank" rel="noreferrer">@rhizome</a></b> and <b><a href="https://x.com/ProcessingOrg" target="_blank" rel="noreferrer">@ProcessingOrg</a></b>. This was a full-circle moment as we showcased generative work alongside creators from all over the world who had also bridged the gap between software and story-telling. 
                        </p>
                        <div className="img-container">
                            <img src={RhizomeImage} alt="Rhizome World NYC" />
                        </div>

                        <br />
                        <h3>Where Next?</h3>
                        <p>
                            This journey is far from over. Works like 'Umoja' continue to be exhibited worldwide, and this page will be updated manually as new milestones are achieved.
                        </p>
                        <br />

                        <h3>Experience Umoja</h3>
                        <p>
                            Each Umoja piece is generative and on-chain. We released <b>254 editions</b> to honor Kenya’s country code. The collection is still minting on the primary market for <b>40 XTZ</b> — affordable, meaningful, and part of a global story.
                        </p>
                        <p><a href="https://www.fxhash.xyz/generative/slug/umoja" target="_blank" rel="noreferrer"><b>→ Mint Umoja on FxHash</b></a></p>

                        <br />
                        <h3>Asante Sana</h3>
                        <p>
                            To every curator, platform, collector, and friend who has offered support — <b>asante</b> (thank you in Swahili). Umoja is about you as much as it is about us. From Nairobi to Miami, Seoul to New York — we walk together.
                        </p>
                        <br /><br />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
