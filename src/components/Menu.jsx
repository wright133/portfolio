import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import "./Menu.css";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // If menu is open AND the click target is outside the menu
      if (isOpen && menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
     <div className="menu">
      <ul>
        {/* Show text on medium and up, hide on small */}
        <li className="menuButton d-none d-md-inline" onClick={toggleMenu}>
          Menu
        </li>

        {/* Show icon only on small screens, hide on md and up */}
        <li className="menuButton d-inline d-md-none" onClick={toggleMenu}>
          <i className="fa-solid fa-bars menuIcon"></i>
        </li>
      </ul>
    </div>


      {/* Sliding Menu Overlay */}
      <div ref={menuRef} className={`side-menu ${isOpen ? "open" : ""}`}>
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
            <i className="fa-brands fa-x-twitter"></i>
          </a>
        </div>
      </div>
    </>
  );
}
