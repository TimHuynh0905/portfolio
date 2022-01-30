import React from "react";

// Material UI Components
import { Timeline as MUTimeline } from "@mui/lab";
import { ThemeProvider, Typography } from "@mui/material";

// Components
import TimelineItem from "components/Timeline/TimelineItem/timelineitem";

// Styling
import theme from "components/Timeline/theme";
import { ExperienceItemProps } from "configs/interfaces";

interface TimeLineProps {
    items: ExperienceItemProps[];
}

const Timeline = ({ items }: TimeLineProps) => {
    return (
        <ThemeProvider theme={theme}>
            <MUTimeline position="alternate">
                {items.map((item, key) => (
                    <TimelineItem key={key} {...item} />
                ))}
            </MUTimeline>
            <Typography
                variant="subtitle1"
                color="text.secondary"
                style={{
                    marginTop: "30px",
                }}
            >
                Note:{" "}
                <Typography
                    component="span"
                    style={{
                        fontWeight: "700",
                    }}
                >
                    SWE = Software Engineer(ing)
                </Typography>
            </Typography>
        </ThemeProvider>
    );
};

export default Timeline;
