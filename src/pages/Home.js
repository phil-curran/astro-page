import React from "react";
import { Grid, Segment, Header } from "semantic-ui-react";

import Timeline from "../components/Timeline";

import moonData from "../data/moon.json";
import sunData from "../data/sun.json";

import "../styles/home.css";

const Home = () => {
  return (
    <Segment>
      <Grid>
        <Grid.Row>
          <Grid.Column>
            <Header as="h2" textAlign="center">
              Sun & Moon Times
            </Header>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Timeline />
        </Grid.Row>
      </Grid>

      <div className="grid-container">
        <div className="grid-item" id="1">
          <p>{sunData[0].solarMidnight}</p>
        </div>
        <div className="grid-item" id="2">
          <p>
            Moonrise: {moonData[0].moonrise}
            {/* Moon phase: {moonData[0].phase} / {moonData[0].percent} */}
          </p>
        </div>
        <div className="grid-item" id="3">
          <p>{sunData[0].sunriseTime}</p>
        </div>
        <div className="grid-item" id="4">
          <p>{sunData[0].solarNoon}</p>
        </div>
        <div className="grid-item" id="5">
          <p>Lunar Noon: </p>
        </div>
        <div className="grid-item" id="6">
          <p>Moonset: {moonData[0].moonset}</p>
        </div>
        <div className="grid-item" id="7">
          <p>{sunData[0].sunsetTime}</p>
        </div>
        <div className="grid-item" id="8">
          <p>Solar Midnight: </p>
        </div>
        <div className="grid-item" id="9">
          <p>Lunar Midnight: </p>
        </div>
      </div>
    </Segment>
  );
};

export default Home;
