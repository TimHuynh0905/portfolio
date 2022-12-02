import React from "react";

// Packages
import clsx from "clsx";

// Interfaces
import { ExperienceProps } from "configs/interfaces";

// Styles
import "./Experience.scss";

interface IExperience {
  item: ExperienceProps;
}

const Experience = ({ item }: IExperience): JSX.Element => {
  return (
    <div className="experience">
      <span id="experience__box--date">
        {item.endDate
          ? `${
              item.startDate.getMonth() + 1
            }/${item.startDate.getFullYear()} - ${
              item.endDate.getMonth() + 1
            }/${item.endDate.getFullYear()}`
          : `${
              item.startDate.getMonth() + 1
            }/${item.startDate.getFullYear()} - Current`}
      </span>
      <div id="experience__box--content">
        <img
          width="120px"
          src={item.logo}
          alt="logo"
          className="experience__company"
          loading="lazy"
        />
        {item.skills.length > 0 && (
          <span className="experience__skills">
            {item.skills.map((skill, idx) => (
              <i
                style={{
                  fontSize: "1.75em",
                }}
                key={idx}
                className={skill}
              />
            ))}
          </span>
        )}
        <span className={clsx("experience__role", item.role)}>{item.role}</span>
      </div>
    </div>
  );
};

export default Experience;
