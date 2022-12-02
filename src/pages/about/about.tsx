import React from "react";

// Image
import ProfilePic from "assets/images/standing_turn.jpeg";

// Data
import { socials, intros, skills } from "pages/about/data";

// Styling
import "pages/about/about.scss";

const About = () => {
  return (
    <div className="panel about">
      <h2 className="mb-5">&lt; About &#128526;/&gt;</h2>
      <div id="intro" className="container">
        <div className="row">
          <div id="image" className="col-12 col-sm-12 col-lg-4">
            <div className="profile-image">
              <div
                className="image"
                style={{
                  backgroundImage: `url(${ProfilePic})`,
                }}
              />
            </div>
            <div className="socials">
              {socials.map((social) => (
                <a
                  key={social.key}
                  href={social.href}
                  rel="noopener noreferrer"
                  target="_blank"
                  className={social.class}
                >
                  {" "}
                </a>
              ))}
            </div>
          </div>
          <div id="info" className="col-12 col-sm-12 col-lg-8">
            <div className="container">
              <div className="row my-3">
                <div className="col">
                  <p id="quote">
                    &quot;A computer enthusiast with a passion in Software
                    Engineering, especially in using RESTful APIs to build
                    Serverless Applications&quot;
                    <span style={{ fontStyle: "normal" }}>
                      &nbsp;&nbsp;&#128517;
                    </span>
                  </p>
                </div>
              </div>
              <div>
                {intros.map((intro) => (
                  <div key={intro.label} className="row my-3">
                    <div className="col-12 col-md-6">
                      <p id="left">{intro.label}</p>
                    </div>
                    <div className="col-12 col-md-6">
                      <p id="right">{intro.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="w-100 my-5" />
      <h2 className="mb-5">&lt; Skills &#9994;/&gt;</h2>
      <div id="skills" className="container">
        <div className="row">
          {skills.map((skill) => (
            <div key={skill.label} className="skill col-12 col-md-6">
              <h3>{skill.label}</h3>
              <p>
                {skill.skillNames.map((name, idx) => (
                  <i key={idx} className={name} />
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
      <hr className="w-100 my-5" />
      <div id="resume">
        <a
          href="https://drive.google.com/file/d/1YEMnrILQqU8Catr4PYDG-U99vxkDz6iH/view?usp=sharing"
          rel="noopener noreferrer"
          target="_blank"
          role="button"
          className="button btn btn-outline-dark px-4"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default About;
