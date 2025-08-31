import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

// ScrollToTop-komponentti varmistaa, että sivu skrollaa aina ylös tai tiettyyn osioon
// kun navigointi tapahtuu React Routerissa
export default function ScrollToTop({ children }) {
  // Haetaan nykyinen sijainti React Routerista
  const location = useLocation();

  // ready seuraa, onko skrollaus suoritettu ja sisältö voidaan näyttää
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // asetetaan ready falseksi ennen skrollausta
    setReady(false);

    // Tarkistetaan, onko navigointitilassa (location.state) määritelty scrollattava osio
    const scrollTarget = location.state?.scrollTo
      ? document.getElementById(location.state.scrollTo) // haetaan elementti id:n perusteella
      : null;

    if (scrollTarget) {
      // jos elementti löytyy, skrollataan siihen heti ilman animaatiota
      scrollTarget.scrollIntoView({ behavior: "auto" });
    } else {
      // jos ei ole tiettyä elementtiä, skrollataan sivun alkuun
      window.scrollTo(0, 0);
    }

    // skrollauksen jälkeen asetetaan ready trueksi, jolloin sisältö näytetään
    setReady(true);
  }, [location]); // suoritetaan aina kun location muuttuu

  // jos skrollaus ei ole valmis, ei näytetä sisältöä
  if (!ready) return null;

  // kun skrollaus valmis, renderöidään lapsielementit
  return children;
}
