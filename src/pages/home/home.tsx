import React from "react";
import CoverImage from "assets/images/skydeck.jpeg";
// Styling
import "pages/home/home.scss";

const Home = () => {
  return (
    <div className="panel home">
      <div className="row">
        <div id="intro" className="col-12 col-lg-6">
          <h1
            style={{
              color: "rgb(28, 30, 48)",
            }}
          >
            Quoc Huynh
          </h1>
          <p>&lt;Software Engineer /&gt;</p>
          <p>&#9917;&#127934;&#128200;&#128075;</p>
        </div>
        <div id="cover" className="col-12 col-lg-6">
          {/* <div
                            className="image"
                            style={{
                                backgroundImage: `url(${CoverImage})`,
                            }}
                        /> */}
          <img src={CoverImage} />
        </div>
      </div>
    </div>
  );
};

export default Home;
