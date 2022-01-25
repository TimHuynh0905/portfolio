import React from "react";
import CoverImage from "assets/images/standing_straight.jpeg";
// Styling
import "pages/home/home.scss";

const Home = () => {
    return (
        <div className="home">
            <div className="container">
                <div className="row">
                    <div id="intro" className="col-12 col-md-7">
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
                    <div id="cover" className="col-12 col-md-5">
                        <div
                            className="image"
                            style={{
                                backgroundImage: `url(${CoverImage})`,
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
