import { Link } from "react-router-dom";
import { useEffect } from "react";


export default function Footer () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const currentYear = new Date().getFullYear();

    return (
        <div className="container">
            <div className="footer"> 
                <Link className="linkFeatured removeTextDecoration" to="/">
                    <p> <b>Ian Wright</b> &copy; {currentYear} </p>
                </Link>
            </div>
        </div>
    )
}