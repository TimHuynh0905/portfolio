import React, { useState, useEffect } from "react";

// Packages
import { useLocation } from "react-router-dom";

// Routes
import routes, { navRoutes } from "routes";

// Font Awesome
import {
  faChevronRight,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// Components
import NavBar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";

// Particles.js
import Particles from "react-tsparticles";
import { particles } from "./configs/particles";

// Stylings
import "./App.scss";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    console.log(location.hash);
  }, [location.hash]);

  const updateMainContent = (hash: string): JSX.Element => {
    const contentElement = navRoutes.find(
      (route) => route.route?.path === hash
    );
    return contentElement?.route?.element || <></>;
  };

  return (
    <div className="App">
      {/* Wrapper */}
      <div id="container">
        {/* Navigation */}
        <NavBar routes={routes} />
        {/* Main Content */}
        <div id="main">
          {/* <Home /> */}
          {updateMainContent(location.hash)}
        </div>
        {/* Footer */}
        <Footer />
      </div>
      {/* Background */}
      {/* <Particles options={particles} /> */}
    </div>
  );
};

export default App;
