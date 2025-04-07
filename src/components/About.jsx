import { useState, useEffect } from "react";
import { Image } from "@mantine/core";

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
            <Image
            radius="0"
            src={isSmallScreen ? "/img/about-img-sm.png" : "/img/about-img-lg.png"}
            alt="decorative image"
            />
            <div className="about-text">
                <h2>HELLO I AM HENNA</h2>
                <p>I'm a Business Information Systems student with a background in graphic design and film studies. 
                  I have passion about combining creativity and technology, especially in the world of UX/UI design. </p>
            </div>
        </section>
    );
}
