import React, { useState, useEffect } from "react";

// Routes
import {
  Route,
  Routes as Switch,
  useNavigate,
  useLocation,
} from "react-router-dom";
import { RouteProps } from "configs/interfaces";
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
  const navigate = useNavigate();
  const location = useLocation();
  const [pageIndex, setPageIndex] = useState<number>(0);

  useEffect(() => {
    const currIndex = navRoutes.findIndex(
      (route) => route.route!.path === location.pathname
    );
    if (currIndex === -1) {
      setPageIndex(0);
      navigate("/");
    } else {
      setPageIndex(currIndex);
    }
  }, []);

  const getRoutes = (routes: RouteProps[]) =>
    routes.map((route: RouteProps) => {
      let returnValue = null;

      if (route.href) {
        returnValue = <Route path={route.href} key={route.key} />;
      } else if (route.route) {
        returnValue = (
          <Route
            path={route.route.path}
            key={route.key}
            element={route.route.element}
          />
        );
      }

      return returnValue;
    });

  const prevPage = () => {
    const newIndex = pageIndex > 0 ? pageIndex - 1 : pageIndex;
    setPageIndex(newIndex);
    navigate(navRoutes[newIndex].route!.path);
  };

  const nextPage = () => {
    const newIndex =
      pageIndex < navRoutes.length - 1 ? pageIndex + 1 : pageIndex;
    setPageIndex(newIndex);
    navigate(navRoutes[newIndex].route!.path);
  };

  return (
    <div className="App">
      {/* Wrapper */}
      <div id="container">
        <div className="wrapper">
          {/* Navigation */}
          <div id="nav">
            <NavBar routes={routes} />
          </div>
          {/* Main Content */}
          <div id="main">
            <Switch>{getRoutes(routes)}</Switch>
          </div>
          {/* Footer */}
          <div id="footer">
            <Footer />
          </div>
        </div>

        <div className="nav-small">
          <div className="nav-arrows">
            {pageIndex! > 0 && (
              <div id="left" className="arrow" onClick={() => prevPage()}>
                <FontAwesomeIcon icon={faChevronLeft} />
              </div>
            )}
            {pageIndex < navRoutes.length - 1 && (
              <div id="right" className="arrow" onClick={() => nextPage()}>
                <FontAwesomeIcon icon={faChevronRight} />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Background */}
      <Particles options={particles} />
    </div>
  );
};

export default App;
