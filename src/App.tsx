import React, { useEffect, useState } from "react";

// Packages
import { useLocation } from "react-router-dom";
import { Height } from "react-animate-height";

// Routes & Pages
import routes from "routes";
import Home from "pages/home/home";
import About from "pages/about/about";
import Experiences from "pages/experiences/experiences";

// Components
import NavBar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";

// Particles.js
import Particles from "react-tsparticles";
import { particles } from "./configs/particles";

// Stylings
import "./App.scss";
import withAnimation from "lib/withAnimation";
import SmallNavbar from "components/Navbar/Small/SmallNavbar";

const AnimatedHome = withAnimation(Home);
const AnimatedAbout = withAnimation(About);
const AnimatedExperiences = withAnimation(Experiences);

const App = () => {
  const location = useLocation();
  const [hash, setHash] = useState<string>(location.hash);
  const [navSize, setNavSize] = useState<"small" | "large">(
    window.innerWidth < 550 ? "small" : "large"
  );

  const setHeight = (expectedHash: string): Height => {
    if (location.hash === expectedHash && hash === expectedHash) {
      return "auto";
    }
    return 0;
  };

  useEffect(() => {
    const handleWindowResize = () => {
      const expectedSize = window.innerWidth < 550 ? "small" : "large";
      setNavSize((currSize) =>
        currSize !== expectedSize ? expectedSize : currSize
      );
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  });

  return (
    <div className="App">
      {/* Wrapper */}
      <div id="container">
        {/* Navigation */}
        {navSize === "large" ? (
          <NavBar routes={routes} />
        ) : (
          <SmallNavbar routes={routes} />
        )}
        {/* Main Content */}
        <div id="main">
          <AnimatedHome
            height={setHeight("")}
            onHeightAnimationEnd={() => setHash(location.hash)}
          />
          <AnimatedAbout
            height={setHeight("#about")}
            onHeightAnimationEnd={() => setHash(location.hash)}
          />
          <AnimatedExperiences
            height={setHeight("#experiences")}
            onHeightAnimationEnd={() => setHash(location.hash)}
          />
        </div>
        {/* Footer */}
        <Footer />
      </div>
      {/* Background */}
      <Particles options={particles} />
    </div>
  );
};

export default App;
