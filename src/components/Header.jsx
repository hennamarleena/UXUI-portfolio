import { useState, useEffect } from "react"; 
import { useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  // isOpen seuraa, onko mobiilivalikko auki vai kiinni
  const [isOpen, setIsOpen] = useState(false); 

  // React Routerin hook, jolla voi navigoida sivulta toiselle
  const navigate = useNavigate();

  // React Routerin hook, jolla saadaan tieto nykyisestä URL:stä
  const location = useLocation();

  // Funktio, joka vaihtaa valikon tilan auki/kiinni
  const toggleMenu = () => setIsOpen(!isOpen);

  // Funktio, joka skrollaa tiettyyn osioon sivulla
  const scrollToSection = (id) => {
    setIsOpen(false); // suljetaan valikko klikkauksen jälkeen

    if (location.pathname !== "/") { // jos ei olla pääsivulla
      navigate("/", { replace: false }); // mennään pääsivulle
      // skrollataan hieman viiveellä, jotta DOM ehtii renderöityä
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else { // jos ollaan jo pääsivulla
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Hook, joka hallitsee body:n scrollausta valikon mukaan
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto"; // estetään taustasivun scrollaaminen valikon ollessa auki
    return () => { document.body.style.overflow = "auto"; }; // puhdistetaan vaikutus komponentin purkautuessa
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

      {/* Hamburger-painike mobiilivalikolle */}
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
