import { Link } from "react-router-dom"; 
import LogoImage from "../assets/name-logo-2.png"; 

export default function Logo() {
  return (
    <Link to="/" className="logoLink">
      <div className="logo">
        {/* IVV */}
          <img src={LogoImage} alt="" />
      </div>
    </Link>
  );
}
