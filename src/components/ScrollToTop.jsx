import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop({ children }) {
  const location = useLocation();
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(false);

    const scrollTarget = location.state?.scrollTo
      ? document.getElementById(location.state.scrollTo)
      : null;

    if (scrollTarget) {
      scrollTarget.scrollIntoView({ behavior: "auto" }); // heti ilman animaatiota
    } else {
      window.scrollTo(0, 0);
    }

    setReady(true);
  }, [location]);

  if (!ready) return null; // piilota sisältö kunnes scroll valmis
  return children;
}
