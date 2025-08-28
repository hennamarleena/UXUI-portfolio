import { useState, useEffect } from "react";
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  const scrollToSection = (id) => {
    setIsOpen(false);

    // Jos ei olla pääsivulla, navigoi ensin siihen
    if (location.pathname !== "/") {
      navigate("/", { replace: false });
      // scrollataan hieman viiveellä, jotta DOM ehtii renderöityä
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Estä scrollaus, kun menu on auki
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => { document.body.style.overflow = "auto"; };
  }, [isOpen]);

  return (
    <header id="header">
      <h1>
        <span style={{ cursor: "pointer" }} 
        onClick={() => navigate("/")}>
        <span>PORTFOLIO</span>
        <br /> Henna Rajakisto
        </span>
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
          <li>
            <button onClick={() => scrollToSection("about")}>About</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("projects")}>Projects</button>
          </li>
          <li>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
