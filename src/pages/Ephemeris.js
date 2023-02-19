import React from "react";
import { Header, Segment, Table } from "semantic-ui-react";

import data from "../data/ephemeris.json";
import Symbol from "../components/Symbol";

export default function Ephemeris() {
  let planets = [
    "Sun",
    "Moon",
    "Mercury",
    "Venus",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
    "Pluto",
    "Chiron",
    "MC",
    "IC",
    "ASC",
    "DESC",
    "NorthNode",
    "SouthNode",
  ];

  return (
    <Segment>
      <Header as="h2" textAlign="center">
        Planetary Ephemeris
      </Header>
      <Table compact="very" className="ui celled table">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="planetColumn">Planet</Table.HeaderCell>
            <Table.HeaderCell className="degreeColumn">Degree</Table.HeaderCell>
            <Table.HeaderCell className="signColumn">Sign</Table.HeaderCell>
            <Table.HeaderCell className="minSecColumn">
              Minutes & Seconds
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {data.map((item, index) => {
            if (planets.includes(item.planet)) {
              return (
                <Table.Row key={index}>
                  <Table.Cell>
                    <Symbol props={item.planet} />
                    {item.planet}
                  </Table.Cell>
                  <Table.Cell>{item.degree}</Table.Cell>
                  <Table.Cell>
                    <Symbol props={item.sign} />
                    {item.sign}
                  </Table.Cell>
                  <Table.Cell>
                    {item.seconds[3]} {item.seconds[4]}
                  </Table.Cell>
                </Table.Row>
              );
            }
          })}
        </Table.Body>
      </Table>
    </Segment>
  );
}
