import Logo from "./Logo";
import Menu from "./Menu"; 

export default function Navbar() {
    return (    
        // <div className="container-fluid">
            <div className="navbar">
                <Logo/> 
                <Menu/> 
            </div> 
        // </div>
    );
}