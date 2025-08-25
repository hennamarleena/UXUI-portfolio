import { useState, useEffect } from "react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  // Estä scrollaus, kun menu on auki
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    
    // Siivoa style muutokset komponentin unmountissa
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <header id="header">
      <h1>
        <span>PORTFOLIO</span> <br />
        Henna Rajakisto
      </h1>

      <button className="hamburger" onClick={toggleMenu} aria-label="Toggle menu">
        ☰
      </button>

      <div 
        className={`overlay ${isOpen ? "open" : ""}`} 
        onClick={toggleMenu} 
      ></div>

      <nav role="navigation" className={isOpen ? "open" : ""}>
        <ul>
          <li><a href="#about" onClick={() => setIsOpen(false)}>About</a></li>
          <li><a href="#projects" onClick={() => setIsOpen(false)}>Projects</a></li>
          <li><a href="#contact" onClick={() => setIsOpen(false)}>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
