import React from "react";

// Components
import Timeline from "components/Timeline/Timeline";

// Data
import experiences from "pages/experiences/data";

// Styling
import "pages/experiences/experiences.scss";

const Experiences = () => {
  return (
    <div className="panel experiences">
      <h2 className="mb-5">&lt; Experiences &#128104;&#8205;&#128187;/&gt;</h2>
      <Timeline
        items={experiences.sort(
          (a, b) =>
            (b.endDate || new Date()).getTime() -
            (a.endDate || new Date()).getTime()
        )}
      />
    </div>
  );
};

export default Experiences;
