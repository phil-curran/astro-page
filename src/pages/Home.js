import React from "react";
import { Grid, Segment, Header } from "semantic-ui-react";

import moonData from "../data/moon.json";
import sunData from "../data/sun.json";

const Home = () => {
  return (
    <Segment>
      <Header as="h2" textAlign="center">
        Sun & Moon Times
      </Header>
      <Grid>
        <Grid.Row columns={6}>
          <Grid.Column>
            <p>Midnight: {sunData[0].solarMidnight}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Moon percent: {moonData[0].percent}</p>
            <p>Moon phase: {moonData[0].phase}</p>
            <p>Moonrise: {moonData[0].moonrise}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Sunrise: {sunData[0].sunriseTime}</p>
            <p>Direction: {sunData[0].sunriseDirection}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Noon: {sunData[0].solarNoon}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Moonset: {moonData[0].moonset}</p>
          </Grid.Column>
          <Grid.Column>
            <p>Sunset: {sunData[0].sunsetTime}</p>
            <p>Direction: {sunData[0].sunsetDirection}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Home;
