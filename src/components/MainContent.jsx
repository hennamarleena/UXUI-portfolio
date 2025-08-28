import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function MainContent() {
  const location = useLocation();

  useEffect(() => {
    // Jos state:ssa scrollTo on määritelty, scrollaa elementtiin
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  return (
    <>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </>
  );
}
