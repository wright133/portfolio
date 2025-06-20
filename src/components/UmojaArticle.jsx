
import Navbar from "./Navbar"; 
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Tweet } from "react-tweet";
import { useEffect } from "react";


import UmojaMain from "../assets/articles/umoja-main.jpeg"; 
import UmojaMasterpiece from "../assets/articles/umoja-masterpiece.png"; 

export default function UmojaArticle () {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []); // The empty dependency array ensures this runs only on mount.
    
    return (
        <div className="article">  
            <Navbar />
            <div className="container">
                <div className="row d-flex flex-column justify-content-center align-items-center">
                    <div className="col col-lg-8 article-content ">
                        <h1>Introducing <b>Umoja</b></h1>
                        <h4>A Generative Art Project by Kamau Kamau & Ian Wright</h4> 
                        <span>~ 3 min read</span>
                        <br />
                        <br />
                        <p>Art has always had the ability to tell powerful stories, and when combined with the boundless possibilities of technology, it can transcend the boundaries of what’s possible. <b>Umoja</b> is a generative art project that celebrates unity and togetherness, conceived by the artists <a href="https://x.com/_KamauKamau/" target="_blank" rel="noreferrer"><b>Kamau Kamau</b></a> and <b>Ian Wright</b> (me). Rooted in culture, abstraction, and the bustling scenes of Nairobi, <b>Umoja</b> brings an entire canvas to life one figurine at a time, painting a picture of shared existence.</p>
                        <br />
                        <h3>What is Umoja?</h3>
                        <p><b>"Umoja"</b> is a Swahili term meaning <i>"togetherness"</i> or <i>"unity"</i>. The project draws inspiration from the crowded, lively streets and marketplaces of Nairobi, Kenya. It reflects the beauty of people from different walks of life coming together, forming a cohesive and vibrant whole. Just like the abstract figures in the artwork, individuals may seem disconnected at first, but as the picture unfolds, the harmony among them becomes evident. This evolving journey results in a striking visual narrative of culture, identity, and belonging.</p>
                        
                        <p>Each piece in the <b>Umoja</b> collection starts as an abstract representation, growing over time into crowds of unique figures, each possessing its own personality yet coexisting in silent unity. Through this transformation, we aim to evoke a sense of togetherness, allowing viewers to witness this process in real time through animated sequences.</p>
                        <br />
                        {/* Blockquote needed here */}
                        <p><i><b>"We wanted to connect with you, the viewer, through this 'live painting' technique to make the creation process feel more personalized as if you were witnessing your piece being created in real time."</b></i></p>
                        <br />
                        
                        <h3>The Creative Journey</h3>
                        
                        <p>The road to <b>Umoja</b> wasn’t linear. We began by exploring simpler, minimalistic forms, but soon realized their vision required a bolder, more abstract style. After several iterations, we stumbled upon the idea of using crowds and figurines, representing everyday people in urban settings.</p>
                        
                        <p>The turning point in the project came when we began seeing more life in the abstract figures we were creating. These figures morphed into representations of the world around them, capturing the essence of community and togetherness.</p>
                        
                        <p>Once this vision took shape, we went <b>back to the drawing board</b>, starting afresh with a clear objective in mind—to tell a story of unity that people can relate to in their daily lives. However, early versions of the project still felt too <i>"digital"</i>. To truly capture the organic, unrefined nature of real-world crowds, we decided to adopt a watercolor aesthetic.</p>
                        <br />

                        <h3>The Watercolor Inspiration</h3>

                        <p>Why watercolor? According to us, it’s one of the first mediums many artists encounter in school. The fluidity, blotches, and ‘happy accidents’ that come with watercolor painting evoke a sense of nostalgia and freedom—qualities that resonate with the spontaneous energy of Umoja. This artistic direction allowed us to blur the lines between traditional art and code-based generative art.</p> 
                        <div className="img-container">
                            <img src="https://pbs.twimg.com/media/GAskAy-XcAAfLjP?format=jpg&name=medium" alt="" />
                        </div>
                        <br />
                        <br />
                        <h3>A Cultural Tribute</h3>
                        
                        <p>At its core, Umoja is a celebration of humanity. We made sure each color palette in the project was named in Swahili, the our native language. This decision adds another cultural layer to the project, emphasizing that unity transcends differences in culture, tribe, and identity. By presenting abstract crowds of people in vibrant, dynamic color schemes, the project highlights how, <b>despite our differences, we are united in our shared experiences</b>.</p> 
                        
                        <i><b>“This is Umoja—a project celebrating people from every walk of life, different cultures, tribes, and fashion, and seeing the uniting factor despite our differences.”</b></i>
                        <br />
                        <br />
                        
                        <h3>The Final Masterpiece</h3>
                        
                        <p>After thousands of lines of code, numerous iterations, and weeks of research, <b>Umoja</b> was born as a fully on-chain generative art project. Its design allows for endless variations, producing unique iterations of abstract crowds with thousands of traits. The final artwork showcases a seamless fusion of digital creativity and cultural storytelling, making each piece a celebration of unity.</p>
                        <br />
                        <div className="img-container">
                            <img src={UmojaMasterpiece} alt="" />
                        </div>
                        <br />
                        <br />
                        <p><b>Umoja</b> is now available for minting on the generative art marketplace <b>FxHash</b>. With 254 tokens available (symbolic of Kenya’s country code), each piece is a rare and distinctive representation of <b>our vision for a more connected world</b>.</p>
                        <br />
                        <p><i><b>"After countless hours of work, we are proud to present our culturally inspired project, ‘Umoja’ (Swahili for ‘togetherness’ or ‘unity’). Now live for minting on FxHash."</b></i></p>
                        <br />
                        <br />
                        
                        <h3>Special Thanks</h3>
                        
                        <p>We extend our gratitude to the communities and platforms that supported us in making Umoja a reality, including <b><a href="https://x.com/fx_hash_/" target="_blank" rel="noreferrer">FxHash</a></b>, <b><a href="https://x.com/RefractionDAO" target="_blank" rel="noreferrer">Refraction DAO</a></b>, and <b><a href="https://x.com/tezos" target="_blank" rel="noreferrer">Tezos</a></b>. The project premiered at <b>South Beach/Art Basel Miami 2023</b> (Learn more <a href="https://refreshmiami.com/event/tezos-south-beach/" target="_blank" rel="noreferrer">here</a> and <a href="https://spotlight.tezos.com/the-tezos-art-community-takes-over-south-beach-during-art-basel/" target="_blank" rel="noreferrer">here</a>), embodying the spirit of togetherness and unity that has been central to its journey.</p>
                        <br />
                        <p><i><b>“Asante (Thank you in Swahili) to everyone who supported us throughout this process. Your encouragement and belief in our vision made this project possible.”</b></i></p>
                        <br />
                        <br />
                        
                        <h3>Summary</h3>
                        
                        <p><b>Umoja</b> stands as a testament to the power of art to bridge gaps between cultures, individuals, and digital frontiers. Kamau Kamau and Ian Wright’s project reminds us that, even in a world of abstract lines and code, we can find common ground and unity in our shared experiences.</p>
                        <br />
                        <br />
                        <br />
                        <p><b>Mint now</b> on FxHash and become a part of this generative celebration of culture and community.</p>
                        <br />
                        <p><a href="https://www.fxhash.xyz/generative/slug/umoja">Link to Mint</a></p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}