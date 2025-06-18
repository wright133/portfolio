import { useState } from "react";
import { Link } from "react-router-dom"; // optional, if you're using React Router
import "./Menu.css";


export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="menu">
        <ul>
          <li className="menuButton" onClick={toggleMenu}>Menu</li>
        </ul>
      </div>

      {/* Sliding Menu Overlay */}
      <div className={`side-menu ${isOpen ? "open" : ""}`}>
        <div className="menu-header">
          <span className="close-btn" onClick={toggleMenu}>✕</span>
        </div>
        <ul className="menu-links">
          <li><a href="/">Home</a></li>
          <li><a href="/visual-art">Artworks</a></li>
          <li><a href="/exhibitions">Exhibitions</a></li>
          <li><a href="/about">About</a></li>
        </ul>
        <div className="menu-footer">
          <a href="https://x.com/__IanWright__" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-x-twitter"></i>
          </a>
          {/* <a href="https://instagram.com/your_handle" target="_blank" rel="noopener noreferrer">
          </a> */}
          {/* <a href="https://discord.com/invite/your_invite" target="_blank" rel="noopener noreferrer">
            <i class="fa-brands fa-discord"></i>
          </a> */}
        </div>
      </div>
    </>
  );
}
