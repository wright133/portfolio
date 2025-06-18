import { Link } from "react-router-dom";
import { useEffect } from "react";


export default function Footer () {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container">
            <div className="footer"> 
                <Link className="linkFeatured removeTextDecoration" to="/">
                    <p>&copy; <b>ianwright.netlify.app</b> - 2024 </p>
                </Link>
            </div>
        </div>
    )
}