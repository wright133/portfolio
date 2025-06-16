import Footer from "./Footer";
import Navbar from "./Navbar";
import ReadMore from "./ReadMore"; 

import Entropes102 from "../assets/visual-art/page/entropes102_smaller.png"; 
import Entropes14 from "../assets/visual-art/page/entropes14_smaller.png"; 
import Entropes28 from "../assets/visual-art/page/entropes28_smaller.png"; 
import Entropes36 from "../assets/visual-art/page/entropes36_smaller.png"; 
import Entropes63 from "../assets/visual-art/page/entropes63_smaller.png"; 
import Entropes90 from "../assets/visual-art/page/entropes90_smaller.png";  

import { useEffect } from "react";

export default function Artwork() {     
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []); // The empty dependency array ensures this runs only on mount.

  return (
    <div className="artwork">
      <Navbar />
      {/* <h1>Artwork</h1>  */}
      <div className="container">
        
        <div className="row">
          {/* Specific Artwork Description */}
          <div className="col-lg-4 artwork-description">
          <h4>Entropes</h4>
            {/* <p className="title">Entropes</p>   */}
            <br />
            <h5>Description</h5>
            <div className="desc"> 
                <ReadMore limit={363}>
                Entropes is an abstract generative art project consisting of patterns and textures made with a heuristic rectangle packing algorithm. It’s a blend of shapes, geometry and colour. It draws notable inspiration from the Bauhaus art style. All these attributes are fused to form aesthetics that create diversity while maintaining cohesiveness across this body of work. 
                The details go down to the very last pixel and outputs can be saved right from the browser at a full resolution of 6400 x 9600 pixels which ensures the quality holds up across majority of displays and different print sizes.
                </ReadMore>
              <p> Made with <i>p5js</i>.</p> 
              <p> A collaborative project by me and Kamau Kamau.</p>
            </div>
            
            <br />
            <h5>Detail</h5>
            <div className="detail">

                <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button no-outline" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Art
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <ul class="list-group">
                            <li class="list-group-item flexify-list">
                                <p>Supply</p> 
                                <p>128</p>
                            </li>
                            <li class="list-group-item flexify-list">
                                <p>Price</p>
                                <p>20 xtz</p>
                            </li>
                            <li class="list-group-item flexify-list">
                                <p>Blockchain</p>
                                <p>Tezos</p>
                            </li> 
                            <li class="list-group-item flexify-list">
                                <p>Marketplace</p> 
                                <p>FxHash</p>
                            </li>
                        </ul>
                    </div>
                    </div>
                </div>

                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed no-outline" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Market
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                    <ul class="list-group"> 
                            <li class="list-group-item flexify-list">
                                <p>Release Date</p>
                                <p>Sep 30 2022</p>
                            </li> 
                            <li class="list-group-item flexify-list">
                                <p>Primary</p> 
                                <p>2.56K xtz</p>
                            </li>
                            <li class="list-group-item flexify-list">
                                <p>Secondary</p>
                                <p>2.49K xtz</p>
                            </li>
                            <li class="list-group-item flexify-list">
                                <p>Floor Price</p>
                                <p>50 xtz</p>
                            </li> 
                        </ul>
                    </div>
                    </div>
                </div> 

                </div>

            </div>

          </div>
          {/* Curated art pieces in form of cards */}
          <div className="col-lg-8 curated-pieces ">
            <h5>Curated</h5> 
            <div className="row">
                
            <div className="col-md-4">
                    {/* <Link to="/artwork"> */}
                    <div className="art-card">
                        <div className="img-container">
                        <img
                            src={Entropes102}
                            alt=""
                        />
                        </div>
                        <div className="desc">
                        <p>Entropes #102</p>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
                <div className="col-md-4">
                    {/* <Link to="/artwork"> */}
                    <div className="art-card">
                        <div className="img-container">
                        <img
                            src={Entropes90}
                            alt=""
                        />
                        </div>
                        <div className="desc">
                        <p>Entropes #90</p>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
                <div className="col-md-4">
                    {/* <Link to="/artwork"> */}
                    <div className="art-card">
                        <div className="img-container">
                        <img
                            src={Entropes63}
                            alt=""
                        />
                        </div>
                        <div className="desc">
                        <p>Entropes #63</p>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>
                
                <div className="col-md-4">
                    {/* <Link to="/artwork"> */}
                    <div className="art-card">
                        <div className="img-container">
                        <img
                            src={Entropes14}
                            alt=""
                        />
                        </div>
                        <div className="desc">
                        <p>Entropes #14</p>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>

                
                <div className="col-md-4">
                    {/* <Link to="/artwork"> */}
                    <div className="art-card">
                        <div className="img-container">
                        <img
                            src={Entropes36}
                            alt=""
                        />
                        </div>
                        <div className="desc">
                        <p>Entropes #36</p>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>

                
                <div className="col-md-4">
                    {/* <Link to="/artwork"> */}
                    <div className="art-card">
                        <div className="img-container">
                        <img
                            src={Entropes28}
                            alt=""
                        />
                        </div>
                        <div className="desc">
                        <p>Entropes #28</p>
                        </div>
                    </div>
                    {/* </Link> */}
                </div>

            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
