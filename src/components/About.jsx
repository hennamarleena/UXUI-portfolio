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
            <div className="about-text">
                <h2>HELLO I AM HENNA</h2>
                <p>
                  I am a recently graduated developer with a strong interest in UI/UX design and digital product development.
                  I aim to combine functionality with aesthetics.
                  My background in graphic design and filmmaking has shaped my approach to visual storytelling. 
                </p>
            </div>
        </section>
    );
}
