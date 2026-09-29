import { useState, useEffect } from "react";

export default function About() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 885);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

    return (
      <section id="about" aria-labelledby="about-title">
        <div className="about-img-container">
            <img
            src={isSmallScreen ? "/img/about-img-sm.png" : "/img/about-img-lg.png"}
            alt="decorative image"
            style={{
              display: "block",
              borderRadius: 0,
              maxWidth: "100%",
              height: "auto"
            }}
            />
        </div>
            <div className="about-text">
                <h2>HELLO I AM HENNA</h2>
                <p>
                  I'm a recently graduated IT professional with a strong interest in usability, web design and digital product development.
                  I aim to create interfaces that combine usability and visual thinking.
                </p>
            </div>
        </section>
    );
}
