import React from "react";
import { Grid } from "semantic-ui-react";

import "./styles/timeline.css";

const Timeline = () => {
  return (
    <Grid centered columns={11}>
      <Grid.Row>
        <hr className="timeline" />
      </Grid.Row>
      <Grid.Row>
        <Grid.Column textAlign="center">
          {" "}
          <div className="midnightStart" />
        </Grid.Column>
        <Grid.Column textAlign="center">
          {" "}
          <div className="moonRise" />
        </Grid.Column>
        <Grid.Column textAlign="center">
          {" "}
          <div className="sunRise" />
        </Grid.Column>
        <Grid.Column textAlign="center">
          {" "}
          <div className="solarNoon" />
        </Grid.Column>
        <Grid.Column textAlign="center">
          {" "}
          <div className="lunarNoon" />
        </Grid.Column>
        <Grid.Column textAlign="center">
          {" "}
          <div className="sunSet" />
        </Grid.Column>
        <Grid.Column textAlign="center">
          {" "}
          <div className="moonSet" />
        </Grid.Column>
        <Grid.Column textAlign="center">
          {" "}
          <div className="midnightEnd" />
        </Grid.Column>
        <Grid.Column textAlign="center">
          {" "}
          <div className="lunarMidnight" />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default Timeline;
