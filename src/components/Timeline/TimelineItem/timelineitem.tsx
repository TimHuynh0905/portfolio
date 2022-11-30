import React from "react";

// Material UI Components
import {
  TimelineItem as MUTimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineOppositeContent,
  TimelineDot,
} from "@mui/lab";
import { Work } from "@mui/icons-material";
import { Typography } from "@mui/material";

// Interface
import { ExperienceItemProps } from "configs/interfaces";

const TimelineItem = (item: ExperienceItemProps) => {
  const getColor = (): "primary" | "success" | "#bdbdbd" => {
    const today = new Date();
    if (
      item.startDate.getMonth() > today.getMonth() &&
      item.startDate.getFullYear() >= today.getFullYear()
    ) {
      return "primary";
    } else if (
      item.endDate.getMonth() >= today.getMonth() &&
      item.endDate.getFullYear() >= today.getFullYear()
    ) {
      return "success";
    } else {
      return "#bdbdbd";
    }
  };
  const color = getColor();
  return (
    <MUTimelineItem>
      {item.startDate.getTime() === item.endDate.getTime() ? (
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {`${item.startDate.getMonth()}/${item.startDate.getFullYear()}`}
          <br />
          {item.location}
        </TimelineOppositeContent>
      ) : (
        <TimelineOppositeContent
          sx={{ m: "auto 0" }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          {`${item.startDate.getMonth() + 1}/${item.startDate.getFullYear()}`} -{" "}
          {`${item.endDate.getMonth() + 1}/${item.endDate.getFullYear()}`}
          <br />
          {item.location}
        </TimelineOppositeContent>
      )}
      <TimelineSeparator>
        <TimelineConnector
          sx={{
            bgcolor: color === "#bdbdbd" ? color : `${color}.main`,
          }}
        />
        {color !== "#bdbdbd" ? (
          <TimelineDot color={color}>
            <Work />
          </TimelineDot>
        ) : (
          <TimelineDot>
            <Work />
          </TimelineDot>
        )}
        <TimelineConnector
          sx={{
            bgcolor: color === "#bdbdbd" ? color : `${color}.main`,
          }}
        />
      </TimelineSeparator>
      <TimelineContent sx={{ py: 2, px: 2 }}>
        <img
          height="30px"
          src={item.logo}
          style={{
            marginTop: "30px",
          }}
          alt="logo"
        />
        <Typography
          variant="subtitle1"
          color="text.secondary"
          style={{
            fontStyle: "italic",
            fontWeight: "700",
            height: "30px",
          }}
        >
          {item.role}
        </Typography>
        <p
          style={{
            margin: "0",
            height: "30px",
            marginTop: "0px",
            marginBottom: "30px",
          }}
        >
          {item.skills.map((skill, idx) => (
            <i
              style={{
                fontSize: "1.75em",
                margin: "0 5px",
              }}
              key={idx}
              className={skill}
            />
          ))}
        </p>
      </TimelineContent>
    </MUTimelineItem>
  );
};

export default TimelineItem;
