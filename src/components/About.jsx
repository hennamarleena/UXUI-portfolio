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
                  I'm a junior UI/UX designer with roots in graphic design, filmmaking and web development. 
                  My journey began with a love for visual storytelling. Over time I became fascinated by how design and technology come together. 
                  I enjoy exploring how to create user-centered digital experiences that combine functionality with aesthetics.
                </p>
            </div>
        </section>
    );
}
