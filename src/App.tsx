import React, { useState } from "react";

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

const AnimatedHome = withAnimation(Home);
const AnimatedAbout = withAnimation(About);
const AnimatedExperiences = withAnimation(Experiences);

const App = () => {
  const location = useLocation();
  const [hash, setHash] = useState<string>(location.hash);

  const setHeight = (expectedHash: string): Height => {
    if (location.hash === expectedHash && hash === expectedHash) {
      return "auto";
    }
    return 0;
  };

  return (
    <div className="App">
      {/* Wrapper */}
      <div id="container">
        {/* Navigation */}
        <NavBar routes={routes} />
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
