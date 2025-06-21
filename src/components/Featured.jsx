import HeritageImage from "../assets/heritage-001.png"; 
import UmojaImage from "../assets/umoja.png"; 
import ArtBaselImage from "../assets/umoja-art-basel.jpg"; 
import RhizomeImage from "../assets/exhibitions/rhizome-ny-2.jpeg";
import InnerReflectionImage from "../assets/articles/inner-reflection/ir6.png";
import { Link } from "react-router-dom";
import "./Featured.css";


export default function Featured () {
    return (
        <div className="featured">
            <h1>Featured...</h1>
            {/* <div className="row d-flex justify-content-center">
                <div className="col-lg-8 featured-image-container"> 
                    <img src={HeritageImage} alt="" /> 
                    <div className="label">
                        <div className="label-item desc-one">Heritage</div>
                        <br />
                        <div className="label-item desc-two">
                            Curated Launch <br></br>
                            <a target="_blank" href="https://codecanvas.art/drop/D7brx6P5ASv6aYrgg7oMneNmT7y81Zqczwq1i7ksXKcv">View full collection on <b>Code Canvas</b></a> &nbsp;&nbsp;<i className="fa-solid fa-arrow-up-right-from-square"></i> </div>
                    </div>
                </div>
            </div> */}

            <div id="featuredCarousel" className="carousel slide rounded overflow-hidden mb-5" data-bs-ride="carousel">
                <div className="carousel-inner">
                    
                    <div className="carousel-item">
                        <img src={RhizomeImage} className="d-block w-100 carousel-img" alt="Update 2" />
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption d-block d-md-block">
                            <h5 >Rhizome World Exhibition</h5>
                            <p>Umoja finally showcased at Rhizome event in New York, 2025.<br></br>
                            <a target="_blank" href="/exhibitions">Learn more</a> &nbsp;&nbsp;<i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </p>
                        </div>
                    </div>
    
                    <div className="carousel-item">
                        <img src={InnerReflectionImage} className="d-block w-100 carousel-img" alt="Update 2" />
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption d-block d-md-block">
                            <h5>Inner Reflection</h5>
                            <p>This is a <b>new</b> generative art release by Kamau Kamau and I, on <b>Bitcoin</b>. Check it out. 
                            <br></br> 
                            <a target="_blank" href="https://gamma.io/ordinals/collections/inner-reflection">Currently minting on <b>Gamma</b></a> &nbsp;&nbsp;<i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </p> 
                        </div>
                    </div>

                    <div className="carousel-item active">
                        <img src={HeritageImage} className="d-block w-100 carousel-img" alt="Update 1" />
                        <div className="carousel-overlay"></div>
                        <div className="carousel-caption d-block d-md-block">
                            <h5>Heritage</h5>   
                            <p>A curated generative art release on Solana (2024). 
                                <br></br>  
                                <a target="_blank" href="https://codecanvas.art/drop/D7brx6P5ASv6aYrgg7oMneNmT7y81Zqczwq1i7ksXKcv">View full collection on <b>Code Canvas</b></a> &nbsp;&nbsp;<i className="fa-solid fa-arrow-up-right-from-square"></i>
                            </p>
                        </div>
                    </div>

                    {/* Add more slides as needed */}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#featuredCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#featuredCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            <div className="featured-separator-2"></div>
            <div className="featured-separator"></div>

            <h5>Quick Links...</h5>
            <br></br>

            <div className="row d-flex justify-content-center"> 

                <div className="col-lg-6 col-md-6 m-auto mb-3 d-flex justify-content-center"> 
                    <div className="featured-card"> 
                        <div className="img-container">
                            <img src="https://pbs.twimg.com/media/Gor2G_8WsAAtWev?format=jpg&name=4096x4096" alt="" />
                        </div>
                        <div className="title">Umoja</div>
                        <div className="desc">Inspired by the bustling crowds common in urban areas, <i>Umoja</i> is an amazing work of art that perfectly captures the theme of unity.</div> 
                        
                        <Link className="linkFeatured" to="/umoja">
                            <div className="button">View this work <i className="fa-solid fa-arrow-right"></i></div>
                        </Link>
                    </div>
                </div>
                
                <div className="col-lg-6 col-md-6 m-auto mb-3 d-flex justify-content-center"> 
                    {/* <img src={UmojaImage} alt="" />  */}
                    <div className="featured-card"> 
                        <div className="img-container">
                            <img src={ArtBaselImage} alt="" />
                        </div>
                        <div className="title">Exhibitions</div>
                        <div className="desc">Umoja's exhibition at Art Basel, Miami, on the very same day of launch, with collectors minting the pieces live on FxHash. Details on more exhibitions. <br></br></div> 
                        
                        <Link className="linkFeatured" to="/exhibitions">
                            <div className="button">View this article <i className="fa-solid fa-arrow-right"></i></div>
                        </Link>
                    </div>
                </div>
                
                

            </div>
            <div className="featured-separator"></div>
        </div>
    )
}