import { Router } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
    });
  }, [location.pathname]);
  return (
    <>
      <Home />
    </>
  );
}

export default App;
