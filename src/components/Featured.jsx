import HeritageImage from "../assets/heritage-001.png"; 
import UmojaImage from "../assets/umoja.png"; 
import ArtBaselImage from "../assets/umoja-art-basel.jpg"; 
import { Link } from "react-router-dom";

export default function Featured () {
    return (
        <div className="featured">
            <h1>Featured...</h1>
            <div className="row d-flex justify-content-center">
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
            </div>
            <div className="featured-separator"></div>
            <div className="row d-flex justify-content-center"> 

                <div className="col-lg-6 col-md-6 m-auto mb-3 d-flex justify-content-center"> 
                    <div className="featured-card"> 
                        <div className="img-container">
                            <img src={UmojaImage} alt="" />
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