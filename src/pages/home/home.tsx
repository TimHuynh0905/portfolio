import React from "react";
import CoverImage from "assets/images/skydeck.jpeg";
// Styling
import "pages/home/home.scss";

const Home = () => {
  return (
    <div className="panel home">
      <div className="row">
        <div id="intro" className="col-12 col-lg-6">
          <h1>Quoc Huynh</h1>
          <code>&lt;Software Engineer /&gt;</code>
          <p>&#9917;&#127934;&#128200;</p>
        </div>
        <div id="cover" className="col-12 col-lg-6">
          <img alt="cover" src={CoverImage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
