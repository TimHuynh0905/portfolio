import React from "react";

// Components
import Experience from "components/Timeline/Experience/Experience";

// Font Awesome Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

// Interfaces
import { ExperienceProps } from "configs/interfaces";

// Styles
import "./Timeline.scss";

interface TimeLineProps {
  items: ExperienceProps[];
}

const Timeline = ({ items }: TimeLineProps) => {
  return (
    <div className="timeline">
      {items.length > 0 && (
        <div className="timeline-container">
          {items.map((item, key) => {
            const today = new Date();
            const timelineColor =
              today <= (item.endDate || today) ? "#6f6866" : "#ccdad1";
            return (
              <div
                key={key}
                className="timeline-item"
                style={
                  {
                    "--timeline-color": timelineColor,
                  } as React.CSSProperties
                }
              >
                <Experience item={item} />
                <div className="timeline-item__icon">
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
              </div>
            );
          })}
        </div>
      )}
      <span>
        Note: <b>SWE = Software Engineer(ing)</b>
      </span>
    </div>
  );
};

export default Timeline;
