import React from "react";

// Image
import ProfilePic from "assets/images/standing_turn.jpeg";

// Styling
import "pages/about/about.scss";

const About = () => {
    const socials: {
        key: string;
        href: string;
        class: string;
    }[] = [
        {
            key: "github",
            href: "https://github.com/TimHuynh0905",
            class: "devicon-github-plain colored",
        },
        {
            key: "linkedin",
            href: "https://www.linkedin.com/in/qthuynh9501",
            class: "devicon-linkedin-plain colored",
        },
        {
            key: "facebook",
            href: "https://www.facebook.com/quoc.thuynh.5/",
            class: "devicon-facebook-plain colored",
        },
    ];

    const intros: {
        label: string;
        value: string;
    }[] = [
        {
            label: "Name",
            value: "Tuan Quoc Huynh",
        },
        {
            label: "From",
            value: "Austin, TX",
        },
        {
            label: "College",
            value: "Northwestern University",
        },
        {
            label: "Major",
            value: "Computer Science",
        },
    ];
    return (
        <div className="about">
            <h2>&lt; About &#9996;/&gt;</h2>
            <div className="container">
                <div id="intro" className="row">
                    <div id="image" className="col-12 col-sm-12 col-xl-4">
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
                                />
                            ))}
                        </div>
                    </div>
                    <div id="info" className="col-12 col-sm-12 col-xl-8">
                        <div className="container">
                            <div className="row my-3">
                                <div className="col">
                                    <p
                                        style={{
                                            fontWeight: 300,
                                            fontStyle: "italic",
                                        }}
                                    >
                                        &quot;A computer enthusiast with a
                                        passion in Software Engineering,
                                        especially in using RESTful APIs to
                                        build Serverless Applications&quot;
                                        <span style={{ fontStyle: "normal" }}>
                                            &nbsp;&nbsp;&#128517;
                                        </span>
                                    </p>
                                </div>
                            </div>
                            {intros.map((intro) => (
                                <div key={intro.label} className="row my-1">
                                    <div className="col-6">
                                        <p id="left">{intro.label}</p>
                                    </div>
                                    <div className="col-6">
                                        <p id="right">{intro.value}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
