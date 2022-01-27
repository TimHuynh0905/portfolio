import React from "react";

// Routes
import { Route, Routes as Switch, Navigate } from "react-router-dom";
import { RouteProps } from "configs/interfaces";
import routes from "routes";

// Components
import NavBar from "components/Navbar/navbar";
import Footer from "components/Footer/footer";

// Particles.js configurations
import Particles from "react-tsparticles";
import { particles } from "./configs/particles";

// Stylings
import "./App.scss";

const App = () => {
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

    return (
        <div className="App">
            {/* Wrapper */}
            <div id="container">
                {/* Navigation */}
                <div id="nav">
                    <NavBar routes={routes} />
                </div>
                {/* Main Content */}
                <div id="main">
                    <Switch>
                        {getRoutes(routes)}
                        <Route path="/" element={<Navigate to="/home" />} />
                    </Switch>
                    <div id="left" className="arrow"></div>
                    <div id="right" className="arrow"></div>
                </div>
                {/* Footer */}
                <div id="footer">
                    <Footer />
                </div>
            </div>
            {/* Background */}
            <Particles options={particles} />
        </div>
    );
};

export default App;
